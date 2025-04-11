from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__, static_folder='static')

products = [
    {'id': "footballBtn", 'name': "Football", 'price': "0001", 'tags': ["Low-Poly"], 'image': "/Images, Videos/Football.png", 'downloadName': "Football.zip", 'downloadLink': "/Products/Football.zip"},
    {'id': "footballPitchBtn", 'name': "Football Pitch", 'price': "0200", 'tags': ["Low-Poly", "Sports"], 'image': "/Images, Videos/pitch.png"},
    {'id': "TennisBtn", 'name': "Tennis Racket", 'price': "0099", 'tags': ["Low-Poly"], 'image': "/Images, Videos/Fabric004_4K-PNG_Color.png"},
    {'id': "TennisCourtBtn", 'name': "Tennis Court", 'price': "0199", 'tags': ["Low-Poly"], 'image': "/Images, Videos/Fabric004_4K-PNG_Color.png"},
    {'id': "VollyballBtn", 'name': "Vollyball ball", 'price': "0100", 'tags': ["Low-Poly"], 'image': "/Images, Videos/Fabric004_4K-PNG_Color.png"},
    {'id': "VollyballCourtBtn", 'name': "Vollyball Court", 'price': "0299", 'tags': ["Low-Poly"], 'image': "/Images, Videos/Fabric004_4K-PNG_Color.png"},
    {'id': "BadmintionBtn", 'name': "Badminton Racket", 'price': "0099", 'tags': ["Low-Poly"], 'image': "/Images, Videos/Fabric004_4K-PNG_Color.png"},
    {'id': "BadmintionCourtBtn", 'name': "Badminton Court", 'price': "0299", 'tags': ["Low-Poly"], 'image': "/Images, Videos/Fabric004_4K-PNG_Color.png"},
    {'id': "MOGBtn", 'name': "MOG-910", 'price': "0699", 'tags': ["Weapon"], 'image': "/Images, Videos/Fabric004_4K-PNG_Color.png"},
]

def search_products(query):
    query_terms = query.lower().split()
    results = []
    for product in products:
        if any(term in tag.lower() for term in query_terms for tag in product['tags']):
            results.append(product)
    return results

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data.get('query', '')
    results = search_products(query)
    return jsonify({'results': results})

if __name__ == '__main__':
    app.run(debug=True)
