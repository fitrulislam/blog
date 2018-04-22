const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

const app = require('../app.js')

chai.use(chaiHttp)

// describe('/POST article', ()=>{
//   it('should return data of new article', (done)=>{
//     chai.request(app)
//       .post('/article')
//       .type('form')
//       .send({
//         'title': 'ABC',
//         'content': 'ABCDEFGHIJKL'
//       })
//       .end((err,res)=>{
//         expect(res.status).to.equal(201)
//         expect(res.body).to.be.an('object')
//         expect(res.body).to.ownProperty('message').eql('new article created')
//         expect(res.body).to.ownProperty('data')
//         done()
//       })
//   })
// })
//
// describe('/GET article', ()=>{
//   it('should return data of all article', (done)=>{
//     chai.request(app)
//       .get('/article')
//       .end((err,res)=>{
//         console.log(res)
//         expect(res.status).to.equal(200)
//         expect(res.body).to.be.an('object')
//         expect(res.body).to.ownProperty('message').eql('all article data')
//         expect(res.body).to.ownProperty('data')
//         done()
//       })
//   })
// })
//
// describe('/UPDATE article', ()=>{
//   it('should update specified data', (done)=>{
//     chai.request(app)
//       .put('/article/5ad46d0ef58b021e8a68952c')
//       .send({
//         'title': 'CBA',
//         'content': 'LKJIHGFEDCBA'
//       })
//       .end((err,res)=>{
//         expect(res.status).to.equal(200)
//         expect(res.body).to.be.an('object')
//         expect(res.body).to.ownProperty('message').eql('article updated')
//         expect(res.body).to.ownProperty('data')
//         done()
//       })
//   })
// })
//
// describe('/DELETE article', ()=>{
//   it('should delete specified data', (done)=>{
//     chai.request(app)
//       .del('/article/5ad46d5baf33921ecb8af598')
//       .end((err,res)=>{
//         expect(res.status).to.equal(200)
//         expect(res.body).to.be.an('object')
//         expect(res.body).to.ownProperty('message').eql('article deleted')
//         expect(res.body).to.ownProperty('data')
//         done()
//       })
//   })
// })

describe('/SIGNUP user', ()=>{
  it('should add new user', (done)=>{
    chai.request(app)
      .post('/user/signup')
      .type('form')
      .send({
        'name': 'Fitrul Islam',
        'email': 'fitrul.islam@gmail.com',
        'password': 'apasihmaukamu'
      })
      .end((err,res)=>{
        expect(res.status).to.equal(201)
        expect(res.body).to.be.an('object')
        expect(res.body).to.ownProperty('message').eql('user created')
        expect(res.body).to.ownProperty('data')
        sdone()
      })
  })
})

describe('/SIGNIN user', ()=>{
  it('user signin', (done)=>{
    chai.request(app)
      .post('/user/signup')
      .type('form')
      .send({
        'email': 'fitrul.islam@gmail.com',
        'password': 'apasihmaukamu'
      })
      .end((err,res)=>{
        expect(res.status).to.equal(200)
        expect(res.body).to.be.an('object')
        expect(res.body).to.ownProperty('message').eql('user successful login')
        expect(res.body).to.ownProperty('token')
        sdone()
      })
  })
})

describe('/UPDATE user', ()=>{
  it('user signin', (done)=>{
    chai.request(app)
      .put('/user/signup')
      .send({
        'name': 'Fitrul Islam'
        'email': 'fitrul.islam@gmail.com',
        'password': 'apasihmaukamu'
      })
      .end((err,res)=>{
        expect(res.status).to.equal(200)
        expect(res.body).to.be.an('object')
        expect(res.body).to.ownProperty('message').eql('user data updated')
        expect(res.body).to.ownProperty('data')
        sdone()
      })
  })
})
