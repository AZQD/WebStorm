# Webstorm
常用知识总结


# 本地服务
1.安装serve服务:
    cnpm install serve -g
    
2.本地启动服务：
    npm run serve
    
如果需要启动某个文件夹：serve folder_name



# 生成代码结构树

    方法一：tree （系统自带，无需安装）
    打开cmd命令窗口
    tree /f > tree.md
    参考：https://zhuanlan.zhihu.com/p/136453459
    
    方法二：treer（需要安装）
    npm install treer -g
    treer -e treer.md -i "/node_modules|.git|.idea/"
    参考：https://blog.csdn.net/qq_31594665/article/details/135073991
