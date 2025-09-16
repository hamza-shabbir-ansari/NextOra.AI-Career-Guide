from flask import Flask, request, render_template
import pickle

app = Flask(__name__)

# ----- ML Model Loading -----
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

with open('vectorizer.pkl', 'rb') as f:
    vectorizer = pickle.load(f)

with open('label_encoder.pkl', 'rb') as f:
    label_encoder = pickle.load(f)

# ----- Existing Routes -----
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact')
def contact_page():
    return render_template('contact.html')

@app.route('/opportunities')
def opportunities_page():
    return render_template('opportunities.html')

@app.route('/Journey')
def journey_page():
    return render_template('Journey.html', recommendations=[])

@app.route('/navigator')
def search_page():
    return render_template('navigator.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    name = request.form['name']
    education = request.form['education']
    interests = request.form['interests']
    skill = request.form['skill']

    profile = f"{education} {interests} {skill}"
    vector = vectorizer.transform([profile])

    probabilities = model.predict_proba(vector)[0]
    top_3_indices = probabilities.argsort()[-3:][::-1]

    recommended_careers = label_encoder.inverse_transform(top_3_indices).tolist()

    return render_template(
        'Journey.html',
        name=name,
        education=education,
        interests=interests,
        skill=skill,
        recommendations=recommended_careers
    )

# ----- Dynamic Page Mapping -----
page_mapping = {
    # Tech
    # Blockchain
    'blockchain-project': 'blockchain-pj.html',
    'blockchain-roadmap': 'blockchain-rd.html',
    'blockchain-resources': 'blockchain-rs.html',

    # Chatbot
    'chatbot-project': 'chatbot-pj.html',
    'chatbot-roadmap': 'chatbot-rd.html',
    'chatbot-resources': 'chatbot-rs.html',

    # Cloud Computing
    'cloud-computing-project': 'cloudcom-pj.html',
    'cloud-computing-roadmap': 'cloudcom-rd.html',
    'cloud-computing-resources': 'cloudcom-rs.html',

    # Computer Vision
    'computer-vision-project': 'comvision-pj.html',
    'computer-vision-roadmap': 'comvision-rd.html',
    'computer-vision-resources': 'comvision-rs.html',

    # Cyber Security
    'cyber-security-project': 'cybersec-pj.html',
    'cyber-security-roadmap': 'cybersec-rd.html',
    'cyber-security-resources': 'cybersec-rs.html',
    # Agentic AI
    'agentic-ai-project': 'agenticai-pj.html',
    'agentic-ai-roadmap': 'agenticai-rd.html',
    'agentic-ai-resources': 'agenticai-rs.html',

    # AI
    'ai-project': 'ai-pj.html',
    'ai-roadmap': 'ai-rd.html',
    'ai-resources': 'ai-rs.html',

    # API Developer
    'api-developer-project': 'apidev-pj.html',
    'api-developer-roadmap': 'apidev-rd.html',
    'api-developer-resources': 'apidev-rs.html',

    # Backend Developer
    'backend-developer-project': 'backenddev-pj.html',
    'backend-developer-roadmap': 'backenddev-rd.html',
    'backend-developer-resources': 'backenddev-rs.html',

    # Big Data
    'big-data-project': 'bigdata-pj.html',
    'big-data-roadmap': 'bigdata-rd.html',
    'big-data-resources': 'bigdata-rs.html',
    # Machine Learning
    'machine-learning-project': 'machinelearning-pj.html',
    'machine-learning-roadmap': 'machinelearning-rd.html',
    'machine-learning-resources': 'machinelearning-rs.html',

    # Mobile Application
    'mobile-application-project': 'mobileapp-pj.html',
    'mobile-application-roadmap': 'mobileapp-rd.html',
    'mobile-application-resources': 'mobileapp-rs.html',

    # NLP
    'nlp-project': 'nlp-pj.html',
    'nlp-roadmap': 'nlp-rd.html',
    'nlp-resources': 'nlp-rs.html',

    # Robotics
    'robotics-project': 'roboteng-pj.html',
    'robotics-roadmap': 'roboteng-rd.html',
    'robotics-resources': 'roboteng-rs.html',

    # Web Developer
    'web-developer-project': 'webdev-pj.html',
    'web-developer-roadmap': 'webdev-rd.html',
    'web-developer-resources': 'webdev-rs.html',
    # Data Science
    'data-science-project': 'datasci-pj.html',
    'data-science-roadmap': 'datasci-rd.html',
    'data-science-resources': 'datasci-rs.html',

    # DevOps
    'devops-project': 'devops-pj.html',
    'devops-roadmap': 'devops-rd.html',
    'devops-resources': 'devops-rs.html',

    # Game Developer
    'game-developer-project': 'gamedev-pj.html',
    'game-developer-roadmap': 'gamedev-rd.html',
    'game-developer-resources': 'gamedev-rs.html',

    # Gen AI
    'gen-ai-project': 'genai-pj.html',
    'gen-ai-roadmap': 'genai-rd.html',
    'gen-ai-resources': 'genai-rs.html',

    # IoT
    'iot-project': 'iot-pj.html',
    'iot-roadmap': 'iot-rd.html',
    'iot-resources': 'iot-rs.html',
    # Medical
    # Anesthesiologist
    'anesthesiologist-project': 'anesthesiologist-pj.html',
    'anesthesiologist-roadmap': 'anesthesiologist-rd.html',
    'anesthesiologist-resources': 'anesthesiologist-rs.html',

    # Cardiologist
    'cardiologist-project': 'cardiologist-pj.html',
    'cardiologist-roadmap': 'cardiologist-rd.html',
    'cardiologist-resources': 'cardiologist-rs.html',

    # Dentist
    'dentist-project': 'dentist-pj.html',
    'dentist-roadmap': 'dentist-rd.html',
    'dentist-resources': 'dentist-rs.html',

    # Doctor
    'doctor-project': 'doctor-pj.html',
    'doctor-roadmap': 'doctor-rd.html',
    'doctor-resources': 'doctor-rs.html',

    # Eye Specialist
    'eye-specialist-project': 'eyespec-pj.html',
    'eye-specialist-roadmap': 'eyespec-rd.html',
    'eye-specialist-resources': 'eyespec-rs.html',
    # Gynecologist
    'gynecologist-project': 'gynecologist-pj.html',
    'gynecologist-roadmap': 'gynecologist-rd.html',
    'gynecologist-resources': 'gynecologist-rs.html',

    # Nurse
    'nurse-project': 'nurse-pj.html',
    'nurse-roadmap': 'nurse-rd.html',
    'nurse-resources': 'nurse-rs.html',

    # Pharmacist
    'pharmacist-project': 'pharmacist-pj.html',
    'pharmacist-roadmap': 'pharmacist-rd.html',
    'pharmacist-resources': 'pharmacist-rs.html',

    # Physiotherapist
    'physiotherapist-project': 'physiotherapist-pj.html',
    'physiotherapist-roadmap': 'physiotherapist-rd.html',
    'physiotherapist-resources': 'physiotherapist-rs.html',

    # Surgeon
    'surgeon-project': 'surgeon-pj.html',
    'surgeon-roadmap': 'surgeon-rd.html',
    'surgeon-resources': 'surgeon-rs.html',
    # Media
    # Content Creator
    'content-creator-project': 'contentcreator-pj.html',
    'content-creator-roadmap': 'contentcreator-rd.html',
    'content-creator-resources': 'contentcreator-rs.html',

    # Digital Marketing
    'digital-marketing-project': 'digitalmark-pj.html',
    'digital-marketing-roadmap': 'digitalmark-rd.html',
    'digital-marketing-resources': 'digitalmark-rs.html',

    # Motion Graphics
    'motion-graphics-project': 'motiongraph-pj.html',
    'motion-graphics-roadmap': 'motiongraph-rd.html',
    'motion-graphics-resources': 'motiongraph-rs.html',

    # SEO Specialist
    'seo-project': 'seospe-pj.html',
    'seo-roadmap': 'seospe-rd.html',
    'seo-resources': 'seospe-rs.html',

    # Social Media Manager
    'social-media-project': 'socialmed-pj.html',
    'social-media-roadmap': 'socialmed-rd.html',
    'social-media-resources': 'socialmed-rs.html',

    # UI/UX Designer
    'ui-ux-project': 'uiux-pj.html',
    'ui-ux-roadmap': 'uiux-rd.html',
    'ui-ux-resources': 'uiux-rs.html',

    # Video Editing
    'video-editing-project': 'videoedi-pj.html',
    'video-editing-roadmap': 'videoedi-rd.html',
    'video-editing-resources': 'videoedi-rs.html',

    # Web Designer
    'web-designer-project': 'webdesign-pj.html',
    'web-designer-roadmap': 'webdesign-rd.html',
    'web-designer-resources': 'webdesign-rs.html',
    # E commerce
     # Dropshipping
    'dropshipping-project': 'dropship-pj.html',
    'dropshipping-roadmap': 'dropship-rd.html',
    'dropshipping-resources': 'dropship-rs.html',

    # E-commerce Store
    'ecommerce-project': 'ecomsto-pj.html',
    'ecommerce-roadmap': 'ecomsto-rd.html',
    'ecommerce-resources': 'ecomsto-rs.html',

    # Shopify
    'shopify-project': 'shopify-pj.html',
    'shopify-roadmap': 'shopify-rd.html',
    'shopify-resources': 'shopify-rs.html',
    # Arts
    # Actor
    'actor-project': 'actor-pj.html',
    'actor-roadmap': 'actor-rd.html',
    'actor-resources': 'actor-rs.html',

    # Comedian
    'comedian-project': 'comedian-pj.html',
    'comedian-roadmap': 'comedian-rd.html',
    'comedian-resources': 'comedian-rs.html',

    # Dance
    'dance-project': 'dance-pj.html',
    'dance-roadmap': 'dance-rd.html',
    'dance-resources': 'dancer-rs.html',

    # Musician
    'musician-project': 'musician-pj.html',
    'musician-roadmap': 'musician-rd.html',
    'musician-resources': 'musician-rs.html',

    # Singer
    'singer-project': 'singer-pj.html',
    'singer-roadmap': 'singer-rd.html',
    'singer-resources': 'singer-rs.html',
    # Sports
    # Badminton
    'badminton-project': 'badminton-pj.html',
    'badminton-roadmap': 'badminton-rd.html',
    'badminton-resources': 'badminton-rs.html',

    # Baseball
    'baseball-project': 'baseball-pj.html',
    'baseball-roadmap': 'baseball-rd.html',
    'baseball-resources': 'baseball-rs.html',

    # Basketball
    'basketball-project': 'basketball-pj.html',
    'basketball-roadmap': 'basketball-rd.html',
    'basketball-resources': 'basketball-rs.html',

    # Boxing
    'boxing-project': 'boxing-pj.html',
    'boxing-roadmap': 'boxing-rd.html',
    'boxing-resources': 'boxing-rs.html',

    # Car Race
    'carrace-project': 'carrace-pj.html',
    'carrace-roadmap': 'carrace-rd.html',
    'carrace-resources': 'carrace-rs.html',

    # Cricket
    'cricket-project': 'cricket-pj.html',
    'cricket-roadmap': 'cricket-rd.html',
    'cricket-resources': 'cricket-rs.html',

    # Cycling
    'cycling-project': 'cycling-pj.html',
    'cycling-roadmap': 'cycling-rd.html',
    'cycling-resources': 'cycling-rs.html',
    # Football
    'football-project': 'football-pj.html',
    'football-roadmap': 'football-rd.html',
    'football-resources': 'football-rs.html',

    # Golf
    'golf-project': 'golf-pj.html',
    'golf-roadmap': 'golf-rd.html',
    'golf-resources': 'golf-rs.html',

    # Hockey
    'hockey-project': 'hockey-pj.html',
    'hockey-roadmap': 'hockey-rd.html',
    'hockey-resources': 'hockey-rs.html',

    # Swimming
    'swimming-project': 'swimming-pj.html',
    'swimming-roadmap': 'swimming-rd.html',
    'swimming-resources': 'swimming-rs.html',

    # Table Tennis
    'tabletennis-project': 'tabletennis-pj.html',
    'tabletennis-roadmap': 'tabletennis-rd.html',
    'tabletennis-resources': 'tabletennis-rs.html',

    # Tennis
    'tennis-project': 'tennis-pj.html',
    'tennis-roadmap': 'tennis-rd.html',
    'tennis-resources': 'tennis-rs.html',
}

@app.route('/page/<page_name>')
def dynamic_page(page_name):
    html_file = page_mapping.get(page_name)
    if html_file:
        return render_template(html_file)
    else:
        return "Page not found", 404

# ----- Run App -----
if __name__ == '__main__':
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
