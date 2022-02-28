<template> 
  <div class="section">
    <div class="section-title">
      <i class="bi bi-play-btn-fill"></i>
      <h1 class="section-title-h1">{{ title }}</h1>
    </div>
    <div class="video-thumbs-row">
      <div class="video-thumb"> 
        <img class="thumbnail" src="https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg"/>
        <h1 class="video-title">{{ vidtitle }}</h1>
        <span class="channel-title">{{ channel }}</h1>
        <br/>
        <span class="stats">👍 {{ likes }} | 👎 {{ dislikes }}</h1>
      </div>
      <div class="video-thumb"> 
        <img class="thumbnail" src="https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg"/>
        <h1 class="video-title">{{ vidtitle }}</h1>
        <span class="channel-title">{{ channel }}</h1>
        <br/>
        <span class="stats">👍 {{ likes }} | 👎 {{ dislikes }}</h1>
      </div>
      <div class="video-thumb"> 
        <img class="thumbnail" src="https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg"/>
        <h1 class="video-title">{{ vidtitle }}</h1>
        <span class="channel-title">{{ channel }}</h1>
        <br/>
        <span class="stats">👍 {{ likes }} | 👎 {{ dislikes }}</h1>
      </div>
    </div>
  <div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: String,
  },

  data() {
    return {
      likes: parseInt(Math.random() * 10000),
      dislikes: parseInt(Math.random() * 1000),
      vidtitle: "Amazing Title",
      channel: "AmazingChannel",
    }
  }
};
</script>

<style scoped>
.video-thumbs {
  display: flex;
  flex-direction: column;
}

.video-title {
  color: #cc0000;
  font-size: 15px;
  font-weight: bold;
}

.channel-title {
  font-size: 13px;
}

.stats {
  font-size: 13px;
  font-weight: bold;
}

.section {
  margin: 10px;
}

h1 {
  font-size: 20px;
}

.section-title {
  display: flex;
  gap: 5px;
  align-items: center;
  flex-direction: row;
}

.thumbnail {
  width: 120px;
  border-radius: 10px;
  border: 5px solid rgba(0, 0, 0, 0.0);
}

.thumbnail:hover {
  border: 3px solid #cc0000;
}

.video-thumbs-row {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
}

.section-title-h1 {
  font-size: 18px;
}

i {
  margin-top: -5px;
}
</style>
