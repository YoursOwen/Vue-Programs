 import $ from 'jquery'
 import './src/css/index.css'
 import './src/css/index.css'
 import './src/css/index.less'
 import 'bootstrap/dist/css/bootstrap.min.css'

 $(function(){
  $('li:odd').css('backgroundColor','yellow')
  $('li:even').css('backgroundColor','purple')
 })