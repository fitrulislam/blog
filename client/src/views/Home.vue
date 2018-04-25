<template>
<div class="wrapper">
  <!-- Sidebar Holder -->
  <nav id="sidebar">
    <div class="sidebar-header">
      <h4>Article List</h4>
    </div>
    <ul class="list-unstyled components">
      <li v-for="(article,index) in articles" v-bind:key="index">
        <router-link :to="{ name: 'ArticleDetails', params: {id: article._id, article} }">
          <h5>{{ article.title }}</h5>
        </router-link>
      </li>
    </ul>
  </nav>
  <div id="content">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"><h4 style="font-weight: bold;">My Blog</h4></a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default" style="display: none;">Submit</button>
          </form>
        </div>
      </div>
    </nav>
    <div>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    articles () {
      return this.$store.state.articles
    }
  },
  created: function () {
    axios.get('http://35.187.241.115:3000/article/read')
      .then(response => {
        this.$store.commit('addArticles', response.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

body {
  font-family: 'Poppins', sans-serif;
  background: #fafafa;
}

p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

.wrapper {
  display: flex;
  align-items: stretch;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  background: grey;
  color: #fff;
  transition: all 0.3s;
}

#sidebar.active {
  margin-left: -250px;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: black;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: #7386D5;
  background: #fff;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}

a[data-toggle="collapse"] {
  position: relative;
}

a[aria-expanded="false"]::before,
a[aria-expanded="true"]::before {
  content: '\e259';
  display: block;
  position: absolute;
  right: 20px;
  font-family: 'Glyphicons Halflings';
  font-size: 0.6em;
}

a[aria-expanded="true"]::before {
  content: '\e260';
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #7386D5;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}

#content {
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>
