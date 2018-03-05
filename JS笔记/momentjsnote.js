<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8"/>
	<title>Document</title>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/locale/zh-cn.js'></script>
</head>

<body>
	<script >
		window.onload=function(){
			moment.locale('zh-cn')  //设置中文  需要引入带locale的js文件生效

			document.write('<span style="color:red">当前时间moment()</span> = ',moment())
			document.write('<hr/>')

			document.write('<span style="color:red">初始格式化moment().format()</span> = ', moment().format())
			document.write('<hr/>')

			document.write('<span style="color:red">设置时间moment("2010-3-5 15:10:3:123")</span> = ', moment('2010-3-5 15:10:3:123'))
			document.write('<hr/>')
			document.write('<br/>')

			document.write('<span style="color:red">.date()是获取，.date(-7)是设置时间</span>')
			document.write('<hr/>')
			document.write('<span style="color:red">moment().date()</span> = ',moment().date())
			document.write('<br/>')
			document.write('<span style="color:red">moment().date(-7).format("YYYY-MM-DD")</span> = ',moment().date(-7).format('YYYY-MM-DD'))
			document.write('<hr/>')
			document.write('<br/>')

			document.write('<span style="color:red">取值</span> = ', moment('2010-3-5 15:10:3:123'))
			document.write('<hr/>')
			document.write(`moment().get('year');<br/>
											moment().get('month');  // 0 to 11<br/>
											moment().get('date');<br/>
											moment().get('hour');<br/>
											moment().get('minute');<br/>
											moment().get('second');<br/>
											moment().get('millisecond');<br/>`
			)
			document.write('<hr/>')

			document.write('<span style="color:red">moment().set("year", 2013) == moment().year(2013)</span>')
			document.write('<br/>')
			document.write('...')
			document.write('<hr/>')

			document.write('<span style="color:red">设置相对时间：moment().add(-3, "d")=</span>',moment().add(-3, 'd'))
			document.write('<br/>')
			document.write(`
				Key	Shorthand<br/>
				years	y<br/>
				quarters	Q<br/>
				months	M<br/>
				weeks	w<br/>
				days	d<br/>
				hours	h<br/>
				minutes	m<br/>
				seconds	s<br/>
				milliseconds	ms<br/>
			`)
			document.write('<hr/>')
			document.write('<br/>')


			document.write('<span style="color:red">格式化format()</span>')
			document.write('<span style="color:red">moment().format("[today] dddd") = </span>', moment().format('[today] dddd'))
			document.write('<br/>')
			document.write('<span style="color:red">moment().format("YYYY-MM-DD") = </span>', moment().format("YYYY-MM-DD"))
			document.write('<br/>')
			document.write('<span style="color:red">moment(2015/12/2).format("YYYY-MM-DD") = </span>', moment('2015/12/2').format("YYYY-MM-DD"))
			document.write('<br/>')
			document.write('<hr/>')

			document.write('<span style="color:red">转化为时间戳：moment()-0 = </span>', moment()-0)
			document.write('<br/>')
			document.write('<hr/>')


			document.write('<span style="color:red">相对时间：moment("2017-9-10").fromNow() = </span>', moment("2017-9-10").fromNow())
			document.write('<br/>')
			document.write('<span style="color:red">相对时间：moment("2017-9-10").fromNow(true); = </span>', moment("2017-9-10").fromNow(true))
			document.write('<hr/>')

			document.write('<span style="color:red">日历时间：moment().calendar() = </span>', moment().calendar())
			document.write('<br/>')
			document.write('<span style="color:red">日历时间：moment("2018-1-4").calendar(); = </span>', moment("2018-1-4").calendar())
			document.write('<hr/>')

			var a = moment("2017-1-20");
			var b = moment("2017-1-19");
			document.write(`
				<span style="color:red">时差 (毫秒) ：
				var a = moment("2017-1-20");
				var b = moment("2017-1-19");
				a.diff(b) = </span>`, a.diff(b))
			document.write('<br/>')
			document.write('<span style="color:red">日历时间：a.diff(b, "days"); = </span>', a.diff(b, 'days'))
			document.write('<br/>')
			document.write('<hr/>')

			document.write(`<span style="color:red">时间比较：moment('2010-10-20').isBefore('2010-10-21')</span>`)
			document.write('<br/>')
			document.write(`<span style="color:red">isBefore、isSame、isAfter、isBetween</span>`)
			document.write('<br/>')
			document.write('<hr/>')

		}
	</script>
</body>
</html>
