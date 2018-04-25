<template>
<div class="content">
  <table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Content</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(article,index) in articles" v-bind:key="index">
        <td>
          <h6>{{ article.title }}</h6></td>
        <td>
          <h6>{{ article.content }}</h6></td>
        <td class="text-right">
          <!-- <button type="button" class="btn btn-sm btn-default" data-toggle="modal" data-target="#editArticle">Edit</button> -->
          <button type="button" class="btn btn-sm btn-default" @click="deleteData(article.title)">Delete</button>
        </td>
        <!-- <div class="modal fade" id="editArticle" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <form @submit.prevent="editData">
                <div class="modal-body">
                  <div class="form-group">
                    <label for="inputTitle">Title</label>
                    <input type="hidden" name="idForState" v-model="article.idForState">
                  </div>
                  <div class="form-group">
                    <label for="inputTitle">Title</label>
                    <input type="text" class="form-control" id="inputTitle" name="title" v-model="article.title">
                  </div>
                  <div class="form-group">
                    <label for="inputDescription">Content</label>
                    <textarea type="textarea" class="form-control" id="inputDescription" name="content" v-model="article.content"></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">Edit Article</button>
                  <button type="submit" class="btn btn-primary" data-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div> -->
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'articleDetailsForAdmin',
  props: ['articles', 'value'],
  methods: {
    deleteData (title) {
      this.$store.commit('deleteArticle', title)
      this.$store.dispatch('deleteArticleInDB', title)
    }
  }
}
</script>

<style lang="css">
</style>
