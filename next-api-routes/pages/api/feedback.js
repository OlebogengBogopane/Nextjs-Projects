import fs from 'fs';
import path from 'path';

// function buildFeedbackPath() {
//     path.join(process.cwd(),'data', 'feedback.json');
// }

function extractFeedback (filePath) {
    const fileData = fs.readFileSync(filePath,);
    const data= JSON.parse(fileData);
    return data;
}

function handler (req, res) {
if (req.method === 'POST') {
     const email = req.body.email;
     const feedbackText = req.body.text;

     const newFeedback = {
        id: new Date().toISOString(),
        email:email,
        text: feedbackText,
        
     };
     const filePath = path.join(process.cwd(),'data','feedback.json')
     const data = extractFeedback()
     data.push(newFeedback);
     fs.writeFileSync(filePath, JSON.stringify(data));
     res.status(201).json({message:'Success!' , feedbak: newFeedback });
    }  else {
        res.status(200).json({ message: 'This works!'})
    }
        }

export default handler;