import 'dotenv/config';
import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import cors from 'cors';
// import { extractTextFromImage } from './ocr.js';


const app = express();
app.use(cors());
app.use(express.json());

app.post("/scrape", async (req, res) => {
    try {
        // 🔐 Security check
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>
        if (!token || token !== process.env.API_SECRET) {
            return res.status(401).json({ error: "Unauthorized request Brother" });
        }

        const { profile_link, bonus, flag } = req.body;

        if (!profile_link) {
            return res.status(400).json({ error: "Missing profile_link" });
        }

        console.log("Scraping:", profile_link);
        const response = await axios.get(profile_link);
        const html = response.data;
        const $ = cheerio.load(html);

        const profile = {};
        const badges = [];
        $(".text--center").each((i, el) => {
            const prof = $(el);

            profile["profAv"] = prof.find(".profile-avatar").attr("src") || "";
            profile["profName"] = prof.find(".ql-display-small").text().trim() || "N/A";
            profile["league"] = prof.find(".ql-headline-medium").text().trim() || "N/A";
            profile["score"] = prof.find(".profile-league strong").text().trim() || "N/A";
            profile["leagueImage"] = prof.find(".profile-league img").attr("src") || "";
        });
        $(".profile-badges .profile-badge").each((i, el) => {

            const badge = $(el);


            const badgeName = badge.find(".ql-title-medium").text().trim() || "N/A";
            const rawDate = badge.find(".ql-body-medium").text().trim() || "N/A";
            const badgeImage = badge.find(".badge-image img").attr("src") || "";
            const badgeProfile = badge.find(".badge-image").attr("href") || "";
            const formatted = rawDate.replace("Earn", "").trim();
            const date = new Date(formatted);
            if (date < new Date("Jan 01, 2025"))
                return;
            const badgeDate = date.toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
            badges.push({
                badgeName,
                badgeDate,
                badgeImage,
                badgeProfile
            });
        });
        // ... inside app.post("/scrape", ...)
        if (flag) {

            const validBadges = badges.filter(badge => badge.badgeImage);

            //Lab Free Badges Names:
            const labFreeNames = [
                "Customer Engagement Suite with Google AI Architecture",
                "Digital Transformation with Google Cloud",
                "Exploring Data Transformation with Google Cloud",
                "Google Calendar",
                "Google Docs",
                "Google Drive",
                "Google Meet",
                "Google Sheets",
                "Google Slides",
                "Innovating with Google Cloud Artificial Intelligence",
                "Machine Learning Operations (MLOps) with Vertex AI: Model Evaluation",
                "Modernize Infrastructure and Applications with Google Cloud",
                "Responsible AI for Digital Leaders with Google Cloud",
                "Responsible AI: Applying AI Principles with Google Cloud",
                "Scaling with Google Cloud Operations",
                "Trust and Security with Google Cloud",
                "Building Complex End to End Self-Service Experiences in Dialogflow CX",
                "Conversational AI on Vertex AI and Dialogflow CX"
            ];
            // Do OCR in parallel with resizing
            //const ocrResults = await Promise.all(validBadges.map(badge => extractTextFromImage(badge.badgeImage)));
            const labFree = [];
            const trivia = badges?.filter(badge => badge?.badgeName?.toLowerCase().includes("trivia"));
            const games = badges?.filter(badge => {
                const name = badge?.badgeName?.toLowerCase()

                return name.includes("level") || name.includes("camp");
            });
            const certifications = badges?.filter(badge => badge?.badgeName?.toLowerCase().includes("certification zone"));

            const excludedNames = [
                "Level", "Base camp", "certification zone", "trivia", "Arcade Skills Resolve",
                "Arcade Love Beyond Query", "Color Your Skills", "Arcade TechCare", "NetworSkills"
            ];
            const includeNames = ["Arcade Love", "Arcade Color", "Arcade TechCare", "NetworSkills"];

            const specGames = badges?.filter(badge => includeNames.some(name => badge?.badgeName?.toLowerCase().includes(name.toLowerCase())));

            const skillBadge = validBadges.filter((badge, i) => {
                // const ocrText = ocrResults[i].toLowerCase();
                // const isCompletionBadge = ocrText.includes("completion badge");
                const isCompletionBadge = labFreeNames.some(name => badge?.badgeName?.toLowerCase() === name.toLowerCase());
                const isExcludedName = excludedNames.some(name =>
                    badge?.badgeName?.toLowerCase().includes(name.toLowerCase())
                );

                if (isCompletionBadge) {
                    labFree.push(badge); // Save lab-free separately
                }

                return !isCompletionBadge && !isExcludedName;
            });

            const counts = [
                {
                    "key": "Skill Badge",
                    "count": skillBadge.length,
                    "point": 0.5 * skillBadge.length
                },
                {
                    "key": "Lab Free",
                    "count": labFree.length,
                    "point": 0 * labFree.length
                },
                {
                    "key": "Games",
                    "count": games.length,
                    "point": 1 * games.length
                },
                {
                    "key": "Special Games",
                    "count": specGames.length,
                    "point": 2 * specGames.length
                },
                {
                    "key": "Trivia",
                    "count": trivia.length,
                    "point": 1 * trivia.length
                },
                {
                    "key": "Certifications",
                    "count": certifications.length,
                    "point": 1 * certifications.length
                }
            ];

            if (bonus === "with") {
                const bonusEarned = {
                    swag: "N/A",
                    bonus: 0,
                    total: 0
                }
                let totalPoints = 0;
                counts.forEach(element => {
                    totalPoints += element.point;
                })
                if ((counts[0].count >= 44) && (counts[1].count >= 16) && ((counts[2].count + counts[3].count + counts[5].count) >= 10) && (counts[4].count >= 8)) {
                    bonusEarned.bonus = 25;
                }
                else if ((counts[0].count >= 30) && (counts[1].count >= 12) && ((counts[2].count + counts[3].count + counts[5].count) >= 8) && (counts[4].count >= 7)) {
                    bonusEarned.bonus = 15;
                }
                else if ((counts[0].count >= 20) && (counts[1].count >= 8) && ((counts[2].count + counts[3].count + counts[5].count) >= 6) && (counts[4].count >= 6)) {
                    bonusEarned.bonus = 8;
                }
                else if ((counts[0].count >= 10) && (counts[1].count >= 4) && ((counts[2].count + counts[3].count + counts[5].count) >= 4) && (counts[4].count >= 4)) {
                    bonusEarned.bonus = 2;
                }
                bonusEarned.total = (totalPoints + bonusEarned.bonus);
                if (bonusEarned.total >= 85)
                    bonusEarned.swag = "Arcade Legend"
                else if (bonusEarned.total >= 75)
                    bonusEarned.swag = "Arcade Champion"
                else if (bonusEarned.total >= 65)
                    bonusEarned.swag = "Arcade Ranger"
                else if (bonusEarned.total >= 40)
                    bonusEarned.swag = "Arcade Trooper"
                else if (bonusEarned.total >= 20)
                    bonusEarned.swag = "Arcade Novice"
                res.json({ bonusEarned, profile, bonus, skillBadge, labFree, games, specGames, trivia, certifications, counts });
            }
            else
                res.json({ profile, bonus, skillBadge, labFree, games, specGames, trivia, certifications, counts });
        }
        else {
            res.json({ profile, bonus, badges });
        }


    } catch (err) {
        console.error("Scrape error:", err.message);
        res.status(500).json({ error: "Scrape failed", details: err.message });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Scraper running on port ${PORT}`));
