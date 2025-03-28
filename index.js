const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/grades/:student_id/',(req,res)=>{
  const studentId = req.params.student_id;
  console.log("Sudent ID:",studentId);
  res.end();
});
app.post('/grades/:student_id/',(req,res)=>{
  const studentId = req.params.student_id;
  console.log("Sudent ID:",studentId);
  console.log("Body:",req.body);
  res.end();
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});