# jsduck #
### Auto generated notes &amp; how to using it ###

jsduck 项目地址：https://github.com/senchalabs/jsduck<br><br>

### 安装： ###
**windows:**
> 
1. download jsduck-6.0.0-beta.exe 集成环境。download address: https://github.com/senchalabs/jsduck/releases
2. 配置环境变量：高级系统设置 > 环境变量 > 系统变量 > Path; 在末尾加上文件所在目录。一般是马上生效，如果不生效注销
3. 启动cmd或者在git base
4. 执行`jsduck --help `如果成功会有一些列帮助信息。代表安装完毕
    
**Mac:**<br>
    see here: https://github.com/senchalabs/jsduck/wiki/Installation


----------

> 
- 环境安装完成后只要配置jsduck.json文件即可。
- 然后把文件放在项目根目录中，cd到目录，直接执行`jsduck`命令即可生成。
- 如果jsduck.json是其他命名，需要执行`jsduck --config=xxx.json `生成。


----------

## jsduck.json 配置信息 ##



    {
		"--title": "页面标题", 
		"--footer": "页面底部footer文案",
		"--warnings": ["-no_doc"],  //一些warning提示，不影响编译
		"--output": "./out",        //文档输出路径
		"--": ["./js/abtest.js"],   //需要编译的js文件，多个文件用逗号隔开
		"--builtin-classes": true,  //编译js内置的函数注释；例如Array,String...不需要必须删除这一行。
		"--body-html": [            //导航处下拉二级菜单
			"<script type='text/javascript'>",
			"Docs.otherProducts = [",
				"{text: 'MyDocs 3.0', href: 'http://example.com/docs/3.0'},",
				"{text: 'MyDocs 2.0', href: 'http://example.com/docs/2.0'},",
				"{text: 'MyDocs 1.0', href: 'http://example.com/docs/1.0'}",
			"];",
			"</script>"
		]
    }



----------

