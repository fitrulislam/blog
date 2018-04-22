<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"><h4 style="font-weight: bold;">My Blog</h4></a>
        </div>
        <div class="collapse navbar-collapse">
          <a class="navbar-right" @click="signout()"><h5 style="font-weight: bold;">Sign Out</h5></a>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="input">
        <div class="d-flex">
          <button type="button" class="btn btn-md btn-primary" data-toggle="modal" data-target="#taskModal">
            Add Article
          </button>
        </div>
        <!-- modal for add article -->
        <div class="modal fade" id="taskModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <form>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="inputTitle">Title</label>
                    <input type="text" class="form-control" id="inputTitle" placeholder="Task Title" v-model="title">
                  </div>
                  <div class="form-group">
                    <label for="inputDescription">Content</label>
                    <textarea type="textarea" class="form-control" id="inputDescription" placeholder="Task Description" v-model="content"></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary" @click="addData()" data-dismiss="modal">Add Article</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- end of modal for add article -->
      </div>
      <articleDetailsForAdmin :articles="articles"></articleDetailsForAdmin>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import articleDetailsForAdmin from '@/components/ArticleDetailsForAdmin.vue'

export default {
  name: 'input',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  components: {
    articleDetailsForAdmin
  },
  computed: {
    articles () {
      return this.$store.state.articles
    }
  },
  methods: {
    addData () {
      this.$store.commit('addArticle', {title: this.title, content: this.content})
      this.$store.dispatch('addArticleToDB', {title: this.title, content: this.content})
      this.title = ''
      this.content = ''
    },
    signout () {
      localStorage.clear()
      location.reload()
    }
  },
  created: function () {
    axios.get('http://localhost:3000/article/read')
      .then(response => {
        this.$store.commit('addArticles', response.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="css">
</style>
