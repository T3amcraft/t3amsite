from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home(name=None):
    return render_template('home.html', name=name)

@app.route('/about')
def about(name=None):
    return render_template('about.html', name=name)

@app.route('/content')
def content(name=None):
    return render_template('content.html', name=name)

@app.route('/test2')
def test2(name=None):
    return render_template('test2.html', name=name)

@app.route('/pictures')
def pictures(name=None):
    return render_template('pictures.html', name=name)

@app.route('/unturned')
def unturned(name=None):
    return render_template('unturned.html', name=name)

@app.route('/unturned/range')
def range(name=None):
    return render_template('unturnedrange.html', name=name)

if __name__ == '__main__':
    app.run(debug=False)