<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost v-for="(post, index) in sampleBlogPost" :key="index" :post="post"/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost';

export default {
  name: 'Home',
  components: { BlogPost },
  data() {
    return {
      welcomeScreen: {
        title: 'Welcome!',
        blogPost:
          'Weekly blog articles with all things programming including HTML, CSS, Javascript and more.',
        welcomeScreen: true,
        photo: 'coding',
      },
      sampleBlogPost: [
        {
          title: 'This is a Filter Title!',
          blogHTML: 'This is a filter blog post title',
          blogCoverPhoto: 'beautiful-stories',
        },
        {
          title: 'This is a Filter 2 Title!',
          blogHTML: 'This is a filter blog post title',
          blogCoverPhoto: 'designed-for-everyone',
        },
      ],
    };
  },
};
</script>
