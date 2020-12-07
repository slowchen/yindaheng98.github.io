(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{532:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"在dockerfile里面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在dockerfile里面"}},[s._v("#")]),s._v(" 在Dockerfile里面")]),s._v(" "),a("h3",{attrs:{id:"_1804版的dockerfile的25-30行左右👇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1804版的dockerfile的25-30行左右👇"}},[s._v("#")]),s._v(" 1804版的Dockerfile的25~30行左右👇")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install packages")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" DEBIAN_FRONTEND noninteractive\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("repository "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y ppa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ondrej/php && \\\n  apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("key adv "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("keyserver keyserver.ubuntu.com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("keys 4F4EA0AAE5267A6C && \\\n  apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get update && \\\n  apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y upgrade && \\\n  apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y install supervisor wget git apache2 php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("xdebug libapache2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("php mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("server php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mysql pwgen php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apcu php7.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mcrypt php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gd php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("xml php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mbstring php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gettext zip unzip php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("zip curl php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("curl vsftpd && \\\n  apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y autoremove && \\\n  echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ServerName localhost"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" /etc/apache2/apache2.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("👆安装packages的时候加装一个vsftpd")]),s._v(" "),a("h3",{attrs:{id:"_40行左右👇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_40行左右👇"}},[s._v("#")]),s._v(" 40行左右👇")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#needed for vsftpd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("p /var/run/vsftpd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("👆建立vsftpd的安全目录"),a("code",[s._v("/var/run/vsftpd/empty")])]),s._v(" "),a("p",[s._v("为什么加这个？后面"),a("code",[s._v("vsftpd.conf")]),s._v("里面"),a("code",[s._v("secure_chroot_dir")]),s._v("有写这个文件夹，运行时用的")]),s._v(" "),a("p",[s._v("👇看原版"),a("code",[s._v("vsftpd.conf")]),s._v("对"),a("code",[s._v("secure_chroot_dir")]),s._v("的注释")]),s._v(" "),a("blockquote",[a("p",[s._v("This option should be the name of a directory which is empty.  Also, the directory should not be writable by the ftp user. This directory is used as a secure chroot() jail at times vsftpd does not require filesystem access.")])]),s._v(" "),a("h3",{attrs:{id:"_40-50行左右👇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_40-50行左右👇"}},[s._v("#")]),s._v(" 40~50行左右👇")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add image configuration and scripts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" supporting_files/start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apache2.sh /start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apache2.sh\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" supporting_files/start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mysqld.sh /start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mysqld.sh\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" supporting_files/start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("vsftpd.sh /start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("vsftpd.sh\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" supporting_files/run.sh /run.sh\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" chmod 755 /*.sh\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" supporting_files/supervisord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apache2.conf /etc/supervisor/conf.d/supervisord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apache2.conf\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" supporting_files/supervisord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mysqld.conf /etc/supervisor/conf.d/supervisord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mysqld.conf\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" supporting_files/supervisord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("vsftpd.conf /etc/supervisor/conf.d/supervisord"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("vsftpd.conf\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" supporting_files/mysqld_innodb.cnf /etc/mysql/conf.d/mysqld_innodb.cnf\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" supporting_files/vsftpd.conf /etc/vsftpd.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("👆加了3个文件👇")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("start-vsftpd.sh")]),s._v("：supervisord里面要用的vsftpd启动脚本")]),s._v(" "),a("li",[a("code",[s._v("supervisord-vsftpd.conf")]),s._v("：supervisord的配置文件，有了这个supervisord能开机启动vsftpd")]),s._v(" "),a("li",[a("code",[s._v("vsftpd.conf")]),s._v("：vsftpd自己的配置文件")])]),s._v(" "),a("p",[s._v("👇这几个文件长这样")]),s._v(" "),a("p",[a("code",[s._v("start-vsftpd.sh")]),s._v("👇")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("exec vsftpd\n")])])]),a("p",[a("code",[s._v("supervisord-vsftpd.conf")]),s._v("👇")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[program:vsftpd]\ncommand=/start-vsftpd.sh\nnumprocs=1\nautostart=true\nautorestart=true\n")])])]),a("p",[a("code",[s._v("vsftpd.conf")]),s._v("👇")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("listen=YES\nlisten_ipv6=NO\nanonymous_enable=NO\nlocal_enable=YES\nwrite_enable=YES\nlocal_umask=022\ndirmessage_enable=YES\nuse_localtime=YES\nxferlog_enable=YES\nconnect_from_port_20=YES\nsecure_chroot_dir=/var/run/vsftpd/empty\npam_service_name=vsftpd\nrsa_cert_file=/etc/ssl/certs/ssl-cert-snakeoil.pem\nrsa_private_key_file=/etc/ssl/private/ssl-cert-snakeoil.key\nssl_enable=NO\nuserlist_enable=YES\nuserlist_deny=NO\nuserlist_file=/etc/vsftpd.user_list\n")])])]),a("h3",{attrs:{id:"_90行左右👇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_90行左右👇"}},[s._v("#")]),s._v(" 90行左右👇")]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" FTP_USERNAME yindaheng98\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" FTP_PASSWORD 8s50"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("55fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("wzxr\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" supporting_files/create_vsftpd_users.sh /create_vsftpd_users.sh\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" chmod 755 /*.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("👆设置FTP用户名和密码，运行一个创建FTP用户的shell")]),s._v(" "),a("p",[a("code",[s._v("create_vsftpd_users.sh")]),s._v("内容👇")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("useradd -g ftp -d /app -s /bin/bash -p ${FTP_PASSWORD} ${FTP_USERNAME}\n")])])]),a("p",[s._v("👆加个用户到ftp用户组")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("chown ftp /app\n")])])]),a("p",[s._v("👆ftp用户组给个权限")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('echo "${FTP_USERNAME}">>/etc/vsftpd.user_list\n')])])]),a("p",[s._v("👆用户加准入名单")]),s._v(" "),a("h2",{attrs:{id:"todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[s._v("#")]),s._v(" TODO")]),s._v(" "),a("p",[s._v("目前已经可以从外网连接了，输了用户名也能验证成功然后输入密码，但是输入了密码之后会报"),a("code",[s._v("530 Login incorrect")]),s._v("目前还不清楚是自己电脑的问题还是镜像没配好")])])}),[],!1,null,null,null);t.default=n.exports}}]);