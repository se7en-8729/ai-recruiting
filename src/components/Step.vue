<template>
  <div class="step-wrap">
    <div class="breadcrumb">
      <span>我的位置：</span>
      <el-breadcrumb separator=">">
          <el-breadcrumb-item>智能招聘</el-breadcrumb-item>
          <el-breadcrumb-item>选择职位</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="step-main">
      <div class="step">
        <el-steps :space="300" :active="active" finish-status="success">
          <el-step title="选择职位"></el-step>
          <el-step title="选择基础模型"></el-step>
          <el-step title="生成职位模型"></el-step>
        </el-steps>
      </div>
      <div class="step-box" v-show="stepShow.step0">
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="请选择所属职位">
            <el-select v-model="form.job" placeholder="请选择所属职位">
              <el-option label="Java实习工程师" value="Java实习工程师"></el-option>
              <el-option label="前端实习工程师" value="前端实习工程师"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请上传合格简历">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList">
              <el-button>点击上传</el-button>
              <div slot="tip" class="el-upload__tip">请上传pdf、doc、docx</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="请上传不合格简历">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList">
              <el-button>点击上传</el-button>
              <div slot="tip" class="el-upload__tip">请上传pdf、doc、docx</div>
            </el-upload>
          </el-form-item>
          <el-button type="primary" @click="next" class="btn-step" size="large">下一步</el-button>
        </el-form>
      </div>
      <div class="step-box-lg" v-show="stepShow.step1">
        <p>请为 Java实习工程师 选择基础模型：</p>
        <div class="card-wrap">
          <el-row>
            <el-col :span="5" v-for="(item, index) in modelList" :key="index" :offset="index > 0 ? 1 : 0" >
              <el-card :body-style="{ padding: '0px' }" :class="{active:isActive[index]}" @click.native="cardShow(index)">
                <div class="image">
                  <img :src="item.img">
                </div>
                <div class="str">
                  <el-button type="text" v-html="item.str"></el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <el-button type="primary" @click="next" class="btn-step" size="large">下一步</el-button>
      </div>
      <div class="step-box-lg" v-show="stepShow.step2">
        <p>Java实习工程师 的职位模型：</p>
        <div class="chart-wrap">
          <div id="chartbox"></div>
        </div>
        <!-- <el-button type="primary" @click="next" class="btn-step" size="large">完成</el-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'step',
  data () {
    return {
      active: 0,
      stepShow: {
        step0: true,
        step1: false,
        step2: false
      },
      form: {
        job: ''
      },
      fileList: [],
      modelList: [
        {img: 'http://www.minixiao.com/img/common/defaultCorp.png', str: '超一流互联网公司<br>人才模型'},
        {img: 'http://www.minixiao.com/img/common/defaultCorp.png', str: '准一线互联网公司<br>人才模型'},
        {img: 'http://www.minixiao.com/img/common/defaultCorp.png', str: '独角兽互联网公司<br>人才模型'},
        {img: 'http://www.minixiao.com/img/common/defaultCorp.png', str: '二线互联网公司<br>人才模型'}
      ],
      isActive: [false, false, false, false]
    }
  },
  methods: {
    next () {
      console.log(this.active)
      // if (this.active++ > 2) this.active = 0
      switch (this.active++) {
        case 0:
          this.stepShow = {
            step0: false,
            step1: true,
            step2: false
          }
          break
        case 1:
          this.stepShow = {
            step0: false,
            step1: false,
            step2: true
          }
          break
        default:
          this.stepShow = {
            step0: true,
            step1: false,
            step2: false
          }
          break
      }
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    cardShow (index) {
      console.log(index)
      this.isActive = [false, false, false, false]
      this.isActive[index] = true
    }
  },
  mounted () {
    let myChart = echarts.init(document.getElementById('chartbox'))
    myChart.setOption({
      radar: {
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          },
          color: '#049cff'
        },
        indicator: [
          {name: '基本教育经历', max: 40},
          {name: '综合评测', max: 20},
          {name: '社团经历', max: 10},
          {name: '项目经验', max: 15},
          {name: '专业技能', max: 15}
        ]
      },
      series: [{
        type: 'radar',
        itemStyle: {
          normal: {
            color: '#049cff',
            lineStyle: {
              color: '#049cff',
              borderColor: '#049cff'
            }
          }
        },
        animation: false,
        data: [
          {
            value: [33, 16, 2, 2, 7],
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return params.value
                },
                color: '#049cff'
              }
            }
          }
        ]
      }]
    })
  }
}
</script>

<style lang="less">
body{
  background: #f6f6f6;
}
.step-wrap{
  width: 1180px;
  margin: 0 auto;
}
.step-main{
  width: 1180px;
  background: #ffffff;
  padding:50px 0;
  min-height:523px;
}
.el-step__main{
  text-align: center;
  transform: translateX(-50%);
  margin-left: 20px!important;
}
.step{
  width: 640px;
  margin: 0 auto 
}
.el-step__head.is-text.is-success{
  background-color: #049cff;
  border-color: #049cff;
}
.el-step__title.is-success{
  color: #049cff;
}
.step-box{
  width: 640px;
  margin: 70px auto 0;
  .el-form-item__content{
    width:400px;
  }
  .el-select{
    display:block;
  }
  .el-upload__tip{
    display: inline-block;
    margin-left: 10px;
    margin-top:0;
  }
}
.btn-step{
  margin:50px auto 30px;
  display: block;
}
.step-box-lg{
  width:900px;
  margin: 40px auto 0;
  .image{
    height: 185px;
    overflow:hidden;
    img{
      width:100%;
      display: block;
    }
  }
  .str{
    padding:0 14px;
    text-align: center;
    .el-button{
      white-space: normal;
      line-height: 1.4;
    }
  }
}
.chart-wrap {
  background-color: #fff;
  height:350px;
  width:640px;
  margin:0 auto;
}

#chartbox {
  width: 640px;
  height: 400px;
}

.el-step__head.is-text.is-process{
  background-color: #d5d5d5;
  border-color: #d5d5d5;
}
.el-step__line{
  background-color: #d5d5d5;
}
.el-step__head.is-text.is-wait {
  color: #d5d5d5;
  border-color: #d5d5d5;
}
.el-step__title.is-wait{
  color: #b5b5b5;
}
.el-card{
  cursor: pointer;
  &.active{
    border-color: #049cff;
    box-shadow: 0 2px 4px 0 rgba(4,156,255,.32),0 0 6px 0 rgba(4,156,255,.32);
  }
}
.card-wrap{
  width: 900px;
  height: 255px;
  overflow: hidden;
  padding-top: 7px;
  .el-row{
    width:936px;
  }
  .el-button--text{color: #049cff;}
  .el-button--text:focus, .el-button--text:hover{
    color: #049cff;
  }
}

.breadcrumb{
    color: #707070;
    font-size:14px;
    height: 14px;
    line-height:1;
    width: 1180px;
    margin: 20px auto;
    &>span{
        float: left;
    }
}
.el-breadcrumb{
    font-size:14px;
}
.el-breadcrumb__item__inner, .el-breadcrumb__item__inner a {
    color: #707070;
}
.el-breadcrumb__item:last-child .el-breadcrumb__item__inner, .el-breadcrumb__item:last-child .el-breadcrumb__item__inner:hover, .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a:hover, .el-breadcrumb__separator {
    color: #707070;
}
</style>
