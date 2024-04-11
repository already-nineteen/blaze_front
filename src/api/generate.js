export default async function (req, res) {
  const question = req.body.question || "";
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      'I am a highly intelligent question answering bot. If you ask me ${question} that is rooted in truth, I will give you the answer to Korean. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "잘 모르겠습니다.".\n',
    temperature: 0,
    max_tokens: 100,
  });

  res.status(200).json({ result: response.data.choices[0].text });
}
