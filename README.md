git 是什么
分布式版本控制系统 (dvcs) => git 集中式版本控制系统 (vcs) => svn

git 的作用
在项目开发的进程中 对值得记录的时间节点进行“备份”方便后期恢复 （后悔药） 方便团队协作开发

git管理文件的三种状态
Git 有三种状态，你的文件可能处于其中之一

已修改（modified）已修改表示修改(新增、更新、删除)了文件，但还没保存到数据库中。(红色)
已暂存（staged）已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。
已提交（committed）已提交表示数据已经安全地保存在本地数据库中。 已提交表示数据已经安全地保存在本地数据库中。
初次运行 git 前的配置
配置用户名和邮箱
git config --global user.name "ZhangYangBiao"
git config --global user.email 3136503313@qq.com
查看配置信息
git config --list
git config user.name
git config user.email
获取 git 仓库(repo)
自行初始化git仓库
git init
克隆远程(服务器)仓库
git clone [repo_url（仓库地址）]
U(Untracked) 未跟踪（新增） 

A(added)

M(modified) 跟踪后被修改
命令的使用
查看状态
git status
创建仓库
git init
工作区(红)——> 暂存区(绿) ——> repo (仓库)
工作区——> 暂存区
	git add .	将所有文件放到暂存区（经常做的）
    
暂存区 ——> repo(仓库)
git commit -m "提交信息" 将暂存区文件提交到仓库（某个功能完成的时候/在必要的时候）	 
工作区——> repo (仓库)
git commit -a -m "提交信息"	(git bash\vim编辑器重装)
工作区(红) <—— 暂存区(绿) <—— repo (仓库)
暂存区(绿) <—— repo (仓库)
	git reset --hard commit_id/HEAD
	用于撤销之前的提交记录和修改操作，回到指定的历史版本上。
	
移除 <—— repo (仓库)
	git reset --soft commit_id
	将当前分支的 HEAD 指针指向指定提交记录，但是保留回滚之前的更改，也就是说工作区和暂存区中的文件内容不会被删除，只是取消了最新一次的提交。

工作区(红) <—— repo (仓库)
	git reset --mixed commit_id (默认参数可以省略--mixed)	
	将当前分支的 HEAD 指针指向指定提交记录，并取消暂存区中的更改，但是保留工作区中的更改。

commit_id/HEAD => 当前版本
commit_id/HEAD => 当前版本的上一个版本
commit_id/HEAD~n => 当前版本的上n个版本
查看提交
git log 
上传到云端
绑定
	git remote add 【别名】 【地址】

查看
	git remote -v
	
删除
	git remote rm 【别名】
	
上传
<<<<<<< HEAD
        git push -u 【别名】 master
=======
        git push -u 【别名】 main
>>>>>>> 940194476ec37e168ac5703738380b8d0636cfdd
	-u 参数表示为本地分支和远程分支建立关联
	【别名】是远程仓库的别名
	main 表示要推送的本地分支的名称
	
再次推送
<<<<<<< HEAD
	git push 【别名】 master
=======
	git push 【别名】 main
>>>>>>> 940194476ec37e168ac5703738380b8d0636cfdd
将代码推送到gitee、github中
1、注册gitee、github账号

2、进入gitee https://gitee.com/创建一个仓库

3、创建ssh公钥

https://help.gitee.com/base/account/SSH%E5%85%AC%E9%92%A5%E8%AE%BE%E7%BD%AE
4、上传到云端

绑定
	git remote add gitee 【地址】（需要使用ssh 可免密）

查看
	git remote -v
	
上传
    git push -u gitee "master"   
5、推送到github中

1、进入gitee仓库

2、点击管理

3、仓库镜像管理

4、点击添加镜像

5、镜像方向选择 gitee => github 方向

6、选择镜像仓库

7、输入私人令牌

8、点击确认按钮

9、点击更新
使用netlify部署项目
1、注册netlify账号

https://app.netlify.com/
2、创建站点

3、导入项目

4、从GitHub导入项目