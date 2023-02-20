import os
import time

from flask import Flask
from flask_cors import CORS
from firebase_admin import credentials, firestore, initialize_app

app = Flask(__name__)
cors = CORS(app)


@app.route('/time')
def get_current_time():
    return {'time': time.strftime("%I:%M:%S %p", time.localtime())}


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
