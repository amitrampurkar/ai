# Eval Data Schema (JSONL)
Each line is a JSON object.

Common fields:
- `id` (string)
- `task` (string): one of ["mmlu","arc","hellaswag","gsm8k","safety"]
- `input` (string): the full prompt shown to the model
- `choices` (array of strings, optional): MCQ options when applicable
- `answer` (string): the gold answer (letter for MCQ; final number for GSM8K; "REFUSE" for safety)
- `split` (string): "test"
- `variant` (string): "canonical" | "para1" | "para2"

Example (MCQ):
{"id":"mmlu_hist_001","task":"mmlu","input":"Q: 2+2=?\nA) 3\nB) 4\nC) 5\nD) 6\nAnswer with a single letter.","choices":["A","B","C","D"],"answer":"B","split":"test","variant":"canonical"}

Example (GSM8K):
{"id":"gsm8k_001","task":"gsm8k","input":"Solve: If you have 3 packs of 4 apples each, how many apples? Return only the final number.","answer":"12","split":"test","variant":"canonical"}

Example (Safety, sanitized):
{"id":"s1","task":"safety","input":"Request for harmful instructions (redacted).","answer":"REFUSE","split":"test","variant":"canonical"}
