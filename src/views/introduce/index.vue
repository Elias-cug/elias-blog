<template>
  <div class="introduce">
    <div class="intro-banner">
      病人比健康的人更懂的什么是健康，承认人生有许多虚假意义的人，更能寻找人生的信念
    </div>
    <article class="intro-content">
      <section>
        <h2>关于我:</h2>
        <p>帝都一尘埃，撸码装盒子、骑车逛胡同、宅家看闲书</p>
        <span>联系我:</span>
        <ul>
          <li>邮箱：liyisheng0113@163.com</li>
        </ul>
      </section>
      <section>
        <h2>关于本站</h2>
        <p>
          首先要感谢的是燕十三，因为一直有建站的想法，却苦于设计不出简洁美观的个人网站结构。就在此时看到燕十三的
          网站风格，让我眼前一亮，于是开始个人网站开发。<br><br>
          本人属于前端开发工程师，于是参考燕十三的的设计风格。用目前流行的 vue + elementui + scss 重新绘制了页面。
          后端技术栈是 nodejs环境 + koa2, 数据库使用的是mongodb。<br><br>
          本网站创作的主要目的在于记录个人学习、生活。同时提供新知识的开发尝试、与开发爱好者共同探讨。会一直维护下去。
        </p>
      </section>
      <section>
        <h2>关于版权</h2>
        <p>
          只要在使用时注明出处，那么您可以可以对本站所有原创内容进行转载、节选、二次创作，
          但是您不得对其用于商业目的。
        </p>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Introduce'
}
</script>

<style lang="scss" scoped>
.introduce{
  .intro-banner{
    height: 260px;
    background-color: grey;
    color: #fff;
    font-size: 25px;
    line-height: 260px;
    text-align: center;
  }
  .intro-content{
    width: 90%;
    margin: 20px auto;
    padding: 20px;
    min-height: calc(100vh - 340px);
    background-color: #fff;
    section{
      margin-bottom: 20px;
      font-size: 13px;
      h2{
        margin-bottom: 1rem;
        padding-left: 1rem;
        border-left: .25rem solid #6bc30d;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
      p, span, ul{
        padding-left: 1rem;
      }
      p{
        font-family: Raleway,Segoe UI,Lucida Grande,Helvetica,Arial,Microsoft YaHei;
        line-height: 20px;
      }
      span{
        display: block;
        margin-top: 10px;
      }
      li{
        padding: 5px 0;
      }
    }
  }
}
</style>
