from flask import render_template, request, redirect, url_for,Flask
import sqlite3

# tasks -> (taskID int, task text, status text)

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    
    conn = sqlite3.connect('database.db')

    cur = conn.cursor()

    cur.execute("SELECT * FROM tasks")

    var_list = cur.fetchall()
    to_list=[]

    for i in var_list:
        to_list.append({'task':i[1],'status':i[2],'id':i[0]})


    return render_template('index.html',to_list=to_list)

@app.route('/add',methods=['POST'])
def add():
    task=request.form.get('todoTask')
    
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()
    cur.execute("SELECT taskID from tasks")
    task_list=cur.fetchall()
    if len(task_list)==0:
        task_list=0
    else:
        task_list=task_list[-1][0]
    
    if task!='':

        cur.execute("INSERT INTO tasks VALUES(?,?,?)",(task_list+1,task,'pending',))

    conn.commit()
    conn.close()

    return redirect(url_for('index'))



@app.route('/mark/<id>',methods=['POST','GET'])
def mark(id):

    conn = sqlite3.connect('database.db')
    cur = conn.cursor()

    cur.execute("UPDATE tasks SET status='complete' WHERE taskID=?",(id,))

    conn.commit()
    conn.close()

    return redirect(url_for('index'))

@app.route('/unmark/<id>',methods=['POST','GET'])
def unmark(id):
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()

    cur.execute("UPDATE tasks SET status='pending' WHERE taskID=?",(id,))

    conn.commit()
    conn.close()

    return redirect(url_for('index'))

@app.route('/remove/<id>',methods=['POST','GET'])
def remove(id):
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()

    cur.execute('DELETE FROM tasks WHERE taskID=?',(id,))

    conn.commit()
    conn.close()

    return redirect(url_for('index'))

@app.route('/clear',methods=['POST','GET'])
def clear():
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()

    cur.execute("DELETE FROM tasks WHERE status='complete'")

    conn.commit()
    conn.close()

    return redirect(url_for('index'))

@app.route('/clearall')
def clearall():
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()

    cur.execute("DELETE FROM tasks")

    conn.commit()
    conn.close()

    return redirect(url_for('index'))



