from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

def get_numbers_from_url(url):
    try:
        response = requests.get(url, timeout=0.5)
        if response.status_code == 200:
            return response.json().get("numbers", [])
    except:
        pass
    return []

@app.route("/numbers", methods=["GET"])
def get_merged_numbers():
    urls = request.args.getlist("url")
    merged_numbers = []

    for url in urls:
        numbers = get_numbers_from_url(url)
        merged_numbers.extend(numbers)

    unique_sorted_numbers = sorted(list(set(merged_numbers)))

    return jsonify({"numbers": unique_sorted_numbers})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8008)
