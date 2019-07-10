/**
 * Created by Administrator on 2016/8/3.
 */

/*
* -- 添加新用户
 INSERT INTO emp(emp_name, salary, birthday)
 VALUES ('马云', 12000, '1980-12-20')
 SELECT *
 FROM emp
 WHERE emp_name = '马云'

 -- 补充用户信息
 UPDATE emp
 SET telephone = '1234567890'
 WHERE emp_id = 118
 SELECT *
 FROM emp
 WHERE emp_id = 118

 -- 删除用户信息
 DELETE FROM emp
 WHERE emp_id = 9
 select *
 FROM emp

 -- 更改用户信息
 UPDATE emp
 SET telephone = '9876543210', salary = salary +3000
 WHERE emp_id = 118
 SELECT *
 FROM emp
 WHERE emp_id = 118

 -- 查询：查询的时候能用id就用id，因为id只有一个
 SELECT *
 FROM emp

 -- 查询生日电话
 SELECT emp_name, birthday, salary
 FROM emp
 WHERE emp_id = 118

 -- 查询工资2000-5000(方法一)
 SELECT *
 FROM emp
 WHERE slary BETWEEN 2000 AND 5000

 -- 查询工资2000-5000(方法一)select * from empwhere salary >=2000 and salary <= 5000

 -- 查询工资在3000以上的人数
 SELECT COUNT(*)
 FROM emp
 WHERE salary > 3000

 -- 查询工资正好为1000，3000,5000的员工select *
 from emp
 where salary in (1000, 3000, 5000)

 -- 查询名字中含有字母sta的  //没有区分大小写
 SELECT *
 FROM emp
 WHERE emp_name LIKE '%sta%'

 -- 查询没有手机号的
 SELECT *
 FROM emp
 WHERE telephone IS NULL

 -- 查询市场部门marketing的员工工资，薪水递减排列,需要把两个表连在一起
 SELECT *
 FROM depart, emp
 WHERE depart_id_fk = depart_id
 AND depart_name = 'marketing'
 ORDER BY emp.salary DESC

 -- 分页 从第0个开始，显示10条
 SELECT *
 FROM emp
 ORDER BY salary DESC  --
 LIMIT 0, 10
 -- 语法规范：select在最上面，order by 在最下面
* */