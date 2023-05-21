//API 서버 구축하기
////npm init  >> express >> enter ... >> enter... >> 
//npm install express >> node index.js (node.js 실행) >> localhost3000 (접속) >> ctrl+c (종료)
//npm install cors 
//https://expressjs.com/ko/starter/hello-world.html >> node index.js >> localhost3000 >> ctrl+c
const express = require('express')
const cors = require('cors')
const { setTimeout } = require('timers/promises')

const app = express()
const port = 4000 //port 3000포트에 node.js 서버가 실행중이야
app.use(cors()) //조건을 걸기 가능  -cors() : 모든 요청에 허용 , cors(조건) : 조건을 건 요청애만 허용


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// http://localhost:4000/members?memId=member
app.get('/members', (req, res) => {
    const q = req.query
    if (q.memId == 'member') {
        res.send({ 'memId': 'member', 'memImage': 'asdasd', 'memStatus': 1 });
    } else {
        res.send({ 'memId': 'null', 'memImage': 'null', 'memStatus': 1 });
    }

})


/**
 * 동행 추가 - POST 요청이지만, 쿼리스트링 이용 - 스케줄번호와 동행아이디만 전달받으면 되므로
 * */
// http://localhost:4000/teams/share?memId=member&scNo=1
// http://localhost:4000/teams/share?memId=test@test.com&scNo=1
app.post('/teams/share', (req, res) => {
    const q = req.query
    if (q.memId == 'member') {
        res.send("shareTeam ok");
    } else {
        res.send("shareTeam fail");
    }

})