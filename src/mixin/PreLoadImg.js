/**
 *  @author 何煜华
 *  @date 2019-02-26 10:44:46
 *  @version 1.0
 *  @description 图片预加载
 *  
 */
export default {
  data() {
    return {
      files: []
    }
  },
  mounted() {
    new Promise((resolve, reject) => {
      this.getFiles()
      if (this.files.length > 0) {
        resolve()
      }
    }).then(() => {
      // console.log(this.files)
      this.preload(this.files)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    // 获取全部要预加载的文件
    getFiles () {
      const files = require.context('../assets/image', false, /.(png|jpg|jpeg|gif|bmp|webp)$/).keys()
      for (let item of files) {
        let file = this.$imgSrc(item.substring(2))
        // base64的不加载
        if (file.indexOf('data:') !== 0) {
          this.files.push(file)
        }
      }
    },
    // 图片预加载
    preload (imgs) {
      let count = 0
      for (let img of imgs) {
        let image = new Image()
        image.src = img
        image.onload = () => {
          count++
          // 计算图片加载的百分数，绑定到percent变量
          let percentNum = Math.floor(count / imgs.length * 100)
          this.percent = `${percentNum}%`
        }
      }
    }
  }
}