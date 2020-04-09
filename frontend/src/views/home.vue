<script>
export default {
  name: 'Home',
  data() {
    return {
      list: [
        {
          title: '压缩图片',
          url: ''
        },
        {
          title: '测试 webhook',
          url: '/example'
        },
      ],
      size: '',
      imageUrl: '',
      imageResult: ''
    }
  },
  methods: {
    resizeImage(file) {
      const imageUrl = URL.createObjectURL(file)
      let oImage = new Image()
      oImage.src = imageUrl
      oImage.onload = () => {
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        const { width, height } = oImage
        canvas.width = width
        canvas.height = height
        ctx.fillStyle = 'rgba(0,0,0,0)'
        ctx.fillRect(0, 0, width, height)
        ctx.drawImage(oImage, 0, 0, width, height)
        const reuslt = canvas.toDataURL('image/png', 0.1)
        console.log(reuslt)
        this.imageResult = reuslt
      }
    }
  },
  render(h) {
    return h('div', {
      class: ['home']
    }, [
      h('ul', this.list.map((item) => {
        return h('li', {
          domProps: {
            innerHTML: item.title
          },
          on: {
            click: () => {
              this.$router.push(item.url)
            }
          }
        })
      })),
      h('el-upload', {
        props: {
          action: '',
          showFileList: false,
          httpRequest: (file) => {
            console.log(file)
            this.size = file.file.size
            this.imageUrl = URL.createObjectURL(file.file)
            this.resizeImage(file.file)
          }
        },
      }, [
        h('el-button', {
          domProps: {
            innerHTML: '上传图片'
          }
        })
      ]),
      h('p', '文件大小: ' + this.size),
      h('img', {
        domProps: {
          src: this.imageUrl
        }
      }),
      h('img', {
        domProps: {
          src: this.imageResult
        }
      })
    ])
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
}
  ul {
    li {
      padding: 10px 0;
      font-size: 20px;
    }
  }
</style>