// create forms group for each question

let q_entity, q_trademark, q_usedEU, q_safety, q_annex1A, q_marketyourname, q_prohibited, q_excluded2, q_generalpurpose, q_annex1B, q_annex1A_safety, q_annex3, q_interact, q_mediacontent, q_established;
let result;
let summary, definitions;

let DEFAULT_SUMMARY = "";

let summaries = {
    "q_entity": " \
        <p> Article 25, Paragraph 1 defines the role you play in the AI ecosystem. Here's a friendly guide to help you figure out which role fits you:</p> \
        <ul> \
            <li><strong>Provider:</strong> If you're the one who builds or modifies the AI system and makes it available on the market, you're a provider! Think of yourself as the creator of the system, ensuring it meets all the necessary requirements.</li> \
            <li><strong>Deployer/Distributor/Importer:</strong> If you're selling or distributing AI that someone else developed, you fit this category. You may also become a \"provider\" if you make significant changes to the AI before use. Distributors make sure the systems they handle are compliant.</li> \
            <li><strong>Manufacturer:</strong> If the AI system is part of a product you build (like a robot or device), you’re responsible for that AI as a provider. Manufacturers ensure the AI functions safely within their product.</li> \
        </ul> \
        ",
"q_usedEU": "<p> Article 2 helps you understand if your AI system falls under the EU AI Act. The key question here is whether your AI system is used within the European Union. Here’s what to consider:</p> \
<ul> \
  <li><strong>Yes:</strong> If your AI system is being used in the EU or its output is being accessed in the EU, it means the system is subject to EU rules. Even if you're based outside the EU, if your system affects users or processes within the EU, you need to comply with the EU AI Act.</li> \
    <li><strong>No:</strong> If your AI system is not used in the EU and doesn't interact with any processes or users within the EU, the Act might not apply to you.</li> \
</ul> \
<p>Check the details in <a href='http://aicompass.barchero.it/article/2'>Article 2</a>.</p> \
",
"q_prohibited": "<p> Article 5 outlines certain AI systems that are outright prohibited in the EU because they are considered too risky. Let’s break it down:</p> \
<ul> \
  <li><strong>Subliminal Manipulation:</strong> If your AI uses hidden techniques to influence people’s decisions in harmful ways without them realizing it, it’s banned.</li> \
    <li><strong>Exploitation of Vulnerabilities:</strong> AI systems that take advantage of people’s vulnerabilities (like age or disability) to cause harm are not allowed.</li> \
    <li><strong>Social Scoring:</strong> Systems that give people scores based on their social behavior, leading to unfair treatment in different contexts, are prohibited.</li> \
    <li><strong>Real-time Biometric Identification in Public Spaces:</strong> AI systems used for real-time facial recognition in public spaces for law enforcement are banned, with very limited exceptions.</li> \
</ul> \
<p>If your AI system falls into one of these categories, it’s considered prohibited. For more details, visit <a href='http://aicompass.barchero.it/article/5'>Article 5</a>.</p> \
",
"q_excluded2": "<p> Article 2 helps you understand if your AI system falls under the EU AI Act. The key question here is whether your AI system is used within the European Union. Here’s what to consider:</p> \
<ul> \
  <li><strong>Yes:</strong> If your AI system is being used in the EU or its output is being accessed in the EU, it means the system is subject to EU rules. Even if you're based outside the EU, if your system affects users or processes within the EU, you need to comply with the EU AI Act.</li> \
    <li><strong>No:</strong> If your AI system is not used in the EU and doesn't interact with any processes or users within the EU, the Act might not apply to you.</li> \
</ul> \
<p>Check the details in <a href='http://aicompass.barchero.it/article/2'>Article 2</a>.</p> \
",
"q_generalpurpose": "<p>Article 51 defines general-purpose AI models as systems capable of performing a wide range of distinct tasks, often used in various downstream applications. Let’s break it down:</p> \
<ul> \
  <li><strong>General-purpose AI:</strong> If your AI model is designed to be flexible and perform many tasks across different applications (like generating text, images, or performing multiple functions), it’s considered a general-purpose AI model.</li> \
    <li><strong>Systemic risk:</strong> If your general-purpose AI model has significant capabilities (measured by high computational power or its impact on many users), it may be classified as one with systemic risk, meaning stricter rules apply to it.</li> \
</ul> \
<p>Check the details in <a href='http://aicompass.barchero.it/article/51'>Article 51</a>.</p> \
",
"q_annex1B": "<p>Annex I, Section B lists specific products that are considered high-risk or safety components of high-risk AI systems. To check if your AI system falls into this category, ask yourself:</p> \
<ul> \
  <li><strong>Product with a safety function:</strong> Is your AI system used as part of a product that is responsible for a safety-critical function? For example, AI systems controlling autonomous vehicles or medical devices would likely be included here.</li> \
    <li><strong>Component of a safety-critical product:</strong> If your AI system is a key component of a product whose malfunction could pose a risk to safety, it falls under this section.</li> \
</ul> \
<p>If this describes your AI system, it may be subject to the specific obligations outlined in the AI Act. You can refer to <a href='http://aicompass.barchero.it/annex/I'>Annex I Section B</a> for more details.</p> \
",
"q_annex1A": "<p>Annex I, Section A of the AI Act lists specific types of products or safety components that are considered high-risk. Here’s how you can tell if your AI system falls into this category:</p> \
<ul> \
  <li><strong>Safety-Critical Product:</strong> Does your AI system control or act as a critical safety component of a product? For example, AI used in systems like medical devices or automated vehicles may be listed here.</li> \
    <li><strong>Key Safety Component:</strong> If your AI system is essential to the safe functioning of a product, meaning its malfunction could pose a risk to people or property, it likely fits into Annex I, Section A.</li> \
</ul> \
<p>If this applies to your system, specific rules and compliance checks will be necessary. You can check the full list in <a href='http://aicompass.barchero.it/annex/I'>Annex I Section A</a>.</p> \
",
"q_interact": "<p>Article 50, Paragraph 1 of the AI Act requires that AI systems interacting with humans must make it clear to people that they are dealing with an AI system. Here’s what you should know:</p> \
<ul> \
  <li><strong>Interaction with Humans:</strong> If your AI system interacts directly with people (e.g., chatbots, virtual assistants), it needs to be designed so that users understand they are communicating with an AI system.</li> \
    <li><strong>Transparency Requirement:</strong> The goal is to ensure transparency so that users are informed about the nature of the interaction unless it’s already obvious.</li> \
</ul> \
<p>If this applies to your system, be sure to follow these transparency guidelines. You can learn more in <a href='http://aicompass.barchero.it/article/50'>Article 50</a>.</p> \
",
"q_mediacontent": "<p>Article 50, Paragraphs 2 and 4 cover AI systems that generate synthetic content such as audio, images, videos, or text. Here's how to tell if your system fits:</p> \
<ul> \
  <li><strong>Yes:</strong> If your AI system generates or manipulates media content (like text, audio, or deepfakes), it must clearly indicate that the content has been artificially created. This helps people understand that what they are seeing or hearing is AI-generated.</li> \
    <li><strong>No:</strong> If your system does not generate such content, or if it’s only providing assistive functions that do not substantially alter the input, then these rules don’t apply.</li> \
</ul> \
<p>If your AI system generates media, be sure to follow the rules on transparency. You can find more information in <a href='http://aicompass.barchero.it/article/50'>Article 50</a>.</p> \
",
"q_marketyourname": "<p>Article 25, Paragraph 1 requires that if you make changes to the name, trademark, purpose, or any substantial attribute of an AI system, you may be considered a \"provider\" under the AI Act. Here’s what to think about:</p> \
<ul> \
  <li><strong>Change of Name/Trademark:</strong> If you have rebranded or placed your own name or trademark on the system, you may now be responsible for compliance as if you were the original provider.</li> \
    <li><strong>Change of Purpose:</strong> If you’ve altered the intended use of the AI system (e.g., using it in a new field or context), it could mean you need to undergo a new conformity assessment.</li> \
    <li><strong>Substantial Modification:</strong> If you’ve made significant changes to the system’s core functions, like updating its operating system or altering how it performs, it might require new regulatory review.</li> \
</ul> \
<p>For more information, refer to <a href='http://aicompass.barchero.it/article/25'>Article 25</a>.</p> \
",
"q_established": "<p>Article 2 asks whether your business or operations are established within the European Union. Here’s how to assess your situation:</p> \
<ul> \
  <li><strong>Yes:</strong> If your company is based or operates within the EU, or if your AI system is used by people or organizations within the EU, then the EU AI Act applies to you. This is true even if your headquarters are located outside the EU but you serve EU users.</li> \
    <li><strong>No:</strong> If your company does not operate in the EU and your AI system is not used in the EU, you are not subject to the EU AI Act.</li> \
</ul> \
<p>For more details, refer to <a href='http://aicompass.barchero.it/article/2'>Article 2</a>.</p> \
",
"q_trademark": "",
"q_safety": "",
"q_annex1A_safety": "",
"q_annex3": "",
};

let defs = {
    "Provider": "Who developes an AI system or has an AI system developed and puts it on the market under its name or trademark",
    "Deployer": "Who uses an AI system in course of a professional activity",
    "Distributor": "Who makes an AI system available on the market on behalf of its producer",
    "Importer": "Who places on the market an AI system developed outside the EU",
    "Trademark": "Name or symbol that a company uses on its products and that cannot legally be used by another company.",
    "Substantial modification": "A change to AI system that affects its initial purpose or its main inital characteristics",
    "General purpose": "An AI model that is capable of accomplishing a wide range of tasks",
    "General-purpose": "An AI model that is capable of accomplishing a wide range of tasks",
    "Risk": "The combination of the probability of an occurrence of harm and the severity of that harm",
    "Training data": "Data used to increase the skills of an AI system",
    "Biometric data": "Personal data concerning the physical, physiological or behavioural characteristics of a natural person ",
    "Biometric identification": "Comparison between the biometric data of an individual anf the biometric data stored in a database",
    "Deep fake": "A content that resembles existing persons, objects, places, entities or events and would falsely appear to a person to be authentic or truthful",
    "Safety component": "Component that assures the safety of a product or of an AI system or the safety of its users",
};

let QuestionToArticle = {
    "q_entity": "/article/25",
    "q_trademark": "/article/25",
    "q_usedEU": "/article/2",
    "q_safety": "/article/6",
    "q_annex1A": "/annex/1",
    "q_marketyourname": "/article/25",
    "q_prohibited": "/article/5",
    "q_excluded2": "/article/2",
    "q_generalpurpose": "/article/51",
    "q_annex1B": "/annex/1",
    "q_annex1A_safety": "/annex/1",
    "q_annex3": "/annex/3",
    "q_interact": "/article/50",
    "q_mediacontent": "/article/50",
    "q_established": "/article/2",
};

function createForms() {
    q_entity = document.createElement('div');
    q_entity.className = 'form-group';
    q_entity.id = 'q_entity';
    q_entity.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_entity">Type of user (<a href="http://aicompass.barchero.it/article/25/">art.25 par.1</a>)</label> \
            <p> You are a: </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_entity" id="q_entity1" value="1"> \
            <label class="form-check-label" for="q_entity1">Provider</label> \
            <input class="form-check-input" type="radio" name="q_entity" id="q_entity2" value="2"> \
            <label class="form-check-label" for="q_entity2">Deployer/Distributor/Importer</label> \
            <input class="form-check-input" type="radio" name="q_entity" id="q_entity3" value="3"> \
            <label class="form-check-label" for="q_entity3">Manufacturer</label> \
        </div>';

    q_trademark = document.createElement('div');
    q_trademark.className = 'form-group';
    q_trademark.id = 'q_trademark';
    q_trademark.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_trademark">Changes (<a href="http://aicompass.barchero.it/article/25/">art.25 par.1</a>)</label> \
            <p> Did you change name/trademark, purpose or any substantial attribute of the system? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_trademark" id="q_trademark1" value="1"> \
            <label class="form-check-label" for="q_trademark1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_trademark" id="q_trademark2" value="2"> \
            <label class="form-check-label" for="q_trademark2">No</label> \
        </div>';

    q_usedEU = document.createElement('div');
    q_usedEU.className = 'form-group';
    q_usedEU.id = 'q_usedEU';
    q_usedEU.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_usedEU">Used in the EU (<a href="http://aicompass.barchero.it/article/2/">art.2</a>)</label> \
            <p> Is the system used in the European Union? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_usedEU" id="q_usedEU1" value="1"> \
            <label class="form-check-label" for="q_usedEU1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_usedEU" id="q_usedEU2" value="2"> \
            <label class="form-check-label" for="q_usedEU2">No</label> \
        </div>';

    q_safety = document.createElement('div');
    q_safety.className = 'form-group';
    q_safety.id = 'q_safety';
    q_safety.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_safety">Safety (<a href="http://aicompass.barchero.it/article/6/">art.6</a>)</label> \
            <p> Is there an AI system as safety component in your product? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_safety" id="q_safety1" value="1"> \
            <label class="form-check-label" for="q_safety1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_safety" id="q_safety2" value="2"> \
            <label class="form-check-label" for="q_safety2">No</label> \
        </div>';

    q_annex1A = document.createElement('div');
    q_annex1A.className = 'form-group';
    q_annex1A.id = 'q_annex1A';
    q_annex1A.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_annex1A">Annex IA (<a href="http://aicompass.barchero.it/annex/1/">annex I sec. A</a>)</label> \
            <p> Are you within one of the categories of Annex 1, Section A? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_annex1A" id="q_annex1A1" value="1"> \
            <label class="form-check-label" for="q_annex1A1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_annex1A" id="q_annex1A2" value="2"> \
            <label class="form-check-label" for="q_annex1A2">No</label> \
        </div>';

    q_marketyourname = document.createElement('div');
    q_marketyourname.className = 'form-group';
    q_marketyourname.id = 'q_marketyourname';
    q_marketyourname.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_marketyourname">Use of name (<a href="http://aicompass.barchero.it/article/25/">art.25 par.1</a>)</label> \
            <p> Will the AI system be placed into market or put into service with your name or trademark? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_marketyourname" id="q_marketyourname1" value="1"> \
            <label class="form-check-label" for="q_marketyourname1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_marketyourname" id="q_marketyourname2" value="2"> \
            <label class="form-check-label" for="q_marketyourname2">No</label> \
        </div>';

    q_prohibited = document.createElement('div');
    q_prohibited.className = 'form-group';
    q_prohibited.id = 'q_prohibited';
    q_prohibited.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_prohibited">Prohibited (<a href="http://aicompass.barchero.it/article/5/">art.5</a>)</label> \
            <p> Is your system prohibited (Article 5)? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_prohibited" id="q_prohibited1" value="1"> \
            <label class="form-check-label" for="q_prohibited1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_prohibited" id="q_prohibited2" value="2"> \
            <label class="form-check-label" for="q_prohibited2">No</label> \
        </div>';

    q_excluded2 = document.createElement('div');
    q_excluded2.className = 'form-group';
    q_excluded2.id = 'q_excluded2';
    q_excluded2.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_excluded2">Excluded cases (<a href="http://aicompass.barchero.it/article/2/">art.2</a>)</label> \
            <p> Is your system among the excluded cases? (Article 2) </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_excluded2" id="q_excluded21" value="1"> \
            <label class="form-check-label" for="q_excluded21">Yes</label> \
            <input class="form-check-input" type="radio" name="q_excluded2" id="q_excluded22" value="2"> \
            <label class="form-check-label" for="q_excluded22">No</label> \
        </div>';

    q_generalpurpose = document.createElement('div');
    q_generalpurpose.className = 'form-group';
    q_generalpurpose.id = 'q_generalpurpose';
    q_generalpurpose.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_generalpurpose">General purpose (<a href="http://aicompass.barchero.it/article/51/">art.51</a>)</label> \
            <p> Is your system a General Purpose AI model? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_generalpurpose" id="q_generalpurpose1" value="1"> \
            <label class="form-check-label" for="q_generalpurpose1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_generalpurpose" id="q_generalpurpose2" value="2"> \
            <label class="form-check-label" for="q_generalpurpose2">No</label> \
        </div>';

    q_annex1B = document.createElement('div');
    q_annex1B.className = 'form-group';
    q_annex1B.id = 'q_annex1B';
    q_annex1B.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_annex1B">Annex IB (<a href="http://aicompass.barchero.it/annex/1/">annex I sec. B</a>)</label> \
            <p> Is your system a product (or is the safety component of a product) in Annex 1 Section B </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_annex1B" id="q_annex1B1" value="1"> \
            <label class="form-check-label" for="q_annex1B1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_annex1B" id="q_annex1B2" value="2"> \
            <label class="form-check-label" for="q_annex1B2">No</label> \
        </div>';

    q_annex1A_safety = document.createElement('div');
    q_annex1A_safety.className = 'form-group';
    q_annex1A_safety.id = 'q_annex1A_safety';
    q_annex1A_safety.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_annex1A_safety">Annex IA safety (<a href="http://aicompass.barchero.it/annex/1/">annex I sec. A</a>)</label> \
            <p> Is your system a product (or is the safety component of a product) in Annex 1, Section A? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_annex1A_safety" id="q_annex1A_safety1" value="1"> \
            <label class="form-check-label" for="q_annex1A_safety1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_annex1A_safety" id="q_annex1A_safety2" value="2"> \
            <label class="form-check-label" for="q_annex1A_safety2">No</label> \
        </div>';

    q_annex3 = document.createElement('div');
    q_annex3.className = 'form-group';
    q_annex3.id = 'q_annex3';
    q_annex3.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_annex3">Annex III (<a href="http://aicompass.barchero.it/annex/3/">annex III</a>)</label> \
            <p> Is your system among the ones in Annex III? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_annex3" id="q_annex31" value="1"> \
            <label class="form-check-label" for="q_annex31">Yes</label> \
            <input class="form-check-input" type="radio" name="q_annex3" id="q_annex32" value="2"> \
            <label class="form-check-label" for="q_annex32">No</label> \
        </div>';

    q_interact = document.createElement('div');
    q_interact.className = 'form-group';
    q_interact.id = 'q_interact';
    q_interact.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_interact">Interaction (<a href="http://aicompass.barchero.it/article/50/">art.50 par.1</a>)</label> \
            <p> Does your system interact with humans? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_interact" id="q_interact1" value="1"> \
            <label class="form-check-label" for="q_interact1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_interact" id="q_interact2" value="2"> \
            <label class="form-check-label" for="q_interact2">No</label> \
        </div>';

    q_mediacontent = document.createElement('div');
    q_mediacontent.className = 'form-group';
    q_mediacontent.id = 'q_mediacontent';
    q_mediacontent.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_mediacontent">Media content (<a href="http://aicompass.barchero.it/article/50/">art.50 parr.2,4</a>)</label> \
            <p> Does your system generate audio, image, video or text content? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_mediacontent" id="q_mediacontent1" value="1"> \
            <label class="form-check-label" for="q_mediacontent1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_mediacontent" id="q_mediacontent2" value="2"> \
            <label class="form-check-label" for="q_mediacontent2">No</label> \
        </div>';

    q_established = document.createElement('div');  
    q_established.className = 'form-group';
    q_established.id = 'q_established';
    q_established.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_established">Established (<a href="http://aicompass.barchero.it/article/2/">art.2</a>)</label> \
            <p> Are you established or operate within the EU? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_established" id="q_established1" value="1"> \
            <label class="form-check-label" for="q_established1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_established" id="q_established2" value="2"> \
            <label class="form-check-label" for="q_established2">No</label> \
        </div>';
}

function reset_result() {
    result.innerHTML = '<h2>Output</h2><p style="color:red">Answer to get more information</p>';
}

// mediacontent changes
function mediacontent_change() {
    let mediacontent = document.querySelector('input[name="q_mediacontent"]:checked').value;
    let form = document.querySelector('form');

    // remove from result all the p with class diverse from continues
    let p = result.querySelectorAll('p');
    p.forEach(function (element) {
        if (element.className != 'continues') {
            result.removeChild(element);
        }
    }
    );

    // remove all children after q_mediacontent in form
    let next = q_mediacontent.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_mediacontent.nextElementSibling;
    }

    if (mediacontent == 1){
        // add p to result
        let p = document.createElement('p');
        p.innerHTML = 'Transparency Obligations: Synthetic Content (<a href="http://aicompass.barchero.it/article/50/">art.50</a>):   \
            <ul> \
                <li>Marking synthetic content: According to <a href="http://aicompass.barchero.it/article/50/">art.50(3)</a>, you must ensure that the outputs of the AI system are clearly marked in a machine-readable format, so they can be detected as artificially generated or manipulated;</li> \
                <li>Exemptions: This obligation does not apply to content that is authorized by law, as stated in <a href="http://aicompass.barchero.it/article/50/">art.50(3)</a>.</li> \
            </ul>';
        // remove all childre non .continues
        let p_delete = result.querySelectorAll('p:not(.continues)');
        p_delete.forEach(function (element) {
            result.removeChild(element);
        }
        );
        result.appendChild(p);
    }
    else if (mediacontent == 2){
        // add p to result
        let p = document.createElement('p');
        p.innerHTML = 'Transparency Obligations for Natural Persons (<a href="http://aicompass.barchero.it/article/50/">art.50</a>): \
            <ul> \
                <li>Informing Individuals: According to <a href="http://aicompass.barchero.it/article/50/">art.50(1)</a>, the AI system, its provider, or its user must inform any person interacting with the system in a timely and clear manner that they are engaging with an AI system, unless it is obvious from the context;</li> \
                <li>Providing Detailed Information: Under <a href="http://aicompass.barchero.it/article/50/">art.50(2)</a>, when appropriate and relevant, you must include additional information such as;</li> \
                <li>AI-Enabled Functions: Specify which functions of the system are powered by AI;</li> \
                <li>Human Oversight: Indicate whether there is human oversight involved in the AI system’s operations;</li> \
                <li>Responsibility for Decision-Making: Clarify who is responsible for the decisions made by the AI system;</li> \
                <li>Rights to Object and Seek Redress: Inform individuals about their rights to object to the AI system’s operations and how they can seek redress if needed.</li> \
            </ul>';
        // if same p is already in result, don't add it again
        let p_result = result.querySelectorAll('p');
        let found = false;
        p_result.forEach(function (element) {
            if (element.textContent == p.textContent) {
                found = true;
            }
        }
        );
        if (!found) {
            // remove all childre non .continues
                        // remove all childre non .continues
            let p_delete = result.querySelectorAll('p:not(.continues)');
            p_delete.forEach(function (element) {
                result.removeChild(element);
            }
            );
            result.appendChild(p);
        }
    }
}

// interaction changes
function interact_change() {
    let interact = document.querySelector('input[name="q_interact"]:checked').value;
    let form = document.querySelector('form');

    // remove from result all the p with class diverse from continues
    let p = result.querySelectorAll('p');
    p.forEach(function (element) {
        if (element.className != 'continues') {
            result.removeChild(element);
        }
    }
    );

    // remove all children after q_interact in form
    let next = q_interact.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_interact.nextElementSibling;
    }

    if (interact == 1){
        // add p to result
        let p = document.createElement('p');
        p.innerHTML = 'Transparency Obligations for Natural Persons (<a href="http://aicompass.barchero.it/article/50/">art.50</a>): \
            <ul> \
                <li>Informing Individuals: According to <a href="http://aicompass.barchero.it/article/50/">art.50(1)</a>, the AI system, its provider, or its user must inform any person interacting with the system in a timely and clear manner that they are engaging with an AI system, unless it is obvious from the context;</li> \
                <li>Providing Detailed Information: Under <a href="http://aicompass.barchero.it/article/50/">art.50(2)</a>, when appropriate and relevant, you must include additional information such as;</li> \
                <li>AI-Enabled Functions: Specify which functions of the system are powered by AI;</li> \
                <li>Human Oversight: Indicate whether there is human oversight involved in the AI system’s operations;</li> \
                <li>Responsibility for Decision-Making: Clarify who is responsible for the decisions made by the AI system;</li> \
                <li>Rights to Object and Seek Redress: Inform individuals about their rights to object to the AI system’s operations and how they can seek redress if needed.</li> \
            </ul>';
        // if same p is already in result, don't add it again
        let p_result = result.querySelectorAll('p');
        let found = false;
        p_result.forEach(function (element) {
            if (element.textContent == p.textContent) {
                found = true;
            }
        }
        );
        if (!found) {
            // remove all childre non .continues
                        // remove all childre non .continues
            let p_delete = result.querySelectorAll('p:not(.continues)');
            p_delete.forEach(function (element) {
                result.removeChild(element);
            }
            );
            result.appendChild(p);
        }

        q_mediacontent.addEventListener('change', mediacontent_change);
        form.appendChild(q_mediacontent);
        set_helps('q_mediacontent');
    }
    else if (interact == 2){
        // mediacontent
        q_mediacontent.addEventListener('change', mediacontent_change);
        form.appendChild(q_mediacontent);
        set_helps('q_mediacontent');
    }
}

// annex3 changes
function annex3_change() {
    let annex3 = document.querySelector('input[name="q_annex3"]:checked').value;
    let form = document.querySelector('form');

    // remove from result all the p with class diverse from continues
    let p = result.querySelectorAll('p');
    p.forEach(function (element) {
        if (element.className != 'continues') {
            result.removeChild(element);
        }
    }
    );

    // remove all children after q_annex3 in form
    let next = q_annex3.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_annex3.nextElementSibling;
    }

    if (annex3 == 1){
        // add p to result
        let p = document.createElement('p');
        p.className = 'continues';
        p.innerHTML = 'Your AI System is under High-Risk AI systems\' regulation (<a href="http://aicompass.barchero.it/article/6/">art.6</a>): \
            <ul> \
                <li>Risk management processes: Establish and implement risk management processes as required by <a href="http://aicompass.barchero.it/article/9/">art.9</a>;</li> \
                <li>Data quality: Use high-quality training, validation, and testing data in accordance with <a href="http://aicompass.barchero.it/article/10/">art.10</a>;</li> \
                <li>Documentation and logging: Create technical documentation and design logging features according to <a href="http://aicompass.barchero.it/article/11/">art.11</a> and <a href="http://aicompass.barchero.it/article/12/">art.12</a>;</li> \
                <li>Transparency and user information: Ensure an appropriate level of transparency and provide necessary information to users, as specified in <a href="http://aicompass.barchero.it/article/13/">art.13</a>;</li> \
                <li>Human oversight: Implement human oversight measures either built into the system or to be applied by users, as stated in <a href="http://aicompass.barchero.it/article/14/">art.14</a>;</li> \
                <li>Robustness, accuracy, and cybersecurity: Ensure the AI system meets standards for robustness, accuracy, and cybersecurity according to <a href="http://aicompass.barchero.it/article/15/">art.15</a>;</li> \
                <li>Quality management system: Set up and maintain a quality management system as required by <a href="http://aicompass.barchero.it/article/17/">art.17</a>.</li> \
        </ul>';
        // if same p is already in result, don't add it again
        let p_result = result.querySelectorAll('p');
        let found = false;
        p_result.forEach(function (element) {
            if (element.textContent == p.textContent) {
                found = true;
            }
        }
        );
        if (!found) {
            // remove all childre non .continues
                        // remove all childre non .continues
            let p_delete = result.querySelectorAll('p:not(.continues)');
            p_delete.forEach(function (element) {
                result.removeChild(element);
            }
            );
            result.appendChild(p);
        }

        // interaction
        q_interact.addEventListener('change', interact_change);
        form.appendChild(q_interact);
        set_helps('q_interact');
    }
    else if (annex3 == 2){
        // interaction
        q_interact.addEventListener('change', interact_change);
        form.appendChild(q_interact);
        set_helps('q_interact');
    }
}

// annex1A safety changes
function annex1A_safety_change() {
    let annex1A_safety = document.querySelector('input[name="q_annex1A_safety"]:checked').value;
    let form = document.querySelector('form');

    reset_result();

    // remove all children after q_annex1A_safety in form
    let next = q_annex1A_safety.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_annex1A_safety.nextElementSibling;
    }

    if (annex1A_safety == 1){
        // add p to result
        let p = document.createElement('p');
        p.className = 'continues';
        p.innerHTML = 'Your AI System is under High-Risk AI systems\' regulation (<a href="http://aicompass.barchero.it/article/6/">art.6</a>): \
            <ul> \
                <li>Risk management processes: Establish and implement risk management processes as required by <a href="http://aicompass.barchero.it/article/9/">art.9</a>;</li> \
                <li>Data quality: Use high-quality training, validation, and testing data in accordance with <a href="http://aicompass.barchero.it/article/10/">art.10</a>;</li> \
                <li>Documentation and logging: Create technical documentation and design logging features according to <a href="http://aicompass.barchero.it/article/11/">art.11</a> and <a href="http://aicompass.barchero.it/article/12/">art.12</a>;</li> \
                <li>Transparency and user information: Ensure an appropriate level of transparency and provide necessary information to users, as specified in <a href="http://aicompass.barchero.it/article/13/">art.13</a>;</li> \
                <li>Human oversight: Implement human oversight measures either built into the system or to be applied by users, as stated in <a href="http://aicompass.barchero.it/article/14/">art.14</a>;</li> \
                <li>Robustness, accuracy, and cybersecurity: Ensure the AI system meets standards for robustness, accuracy, and cybersecurity according to <a href="http://aicompass.barchero.it/article/15/">art.15</a>;</li> \
                <li>Quality management system: Set up and maintain a quality management system as required by <a href="http://aicompass.barchero.it/article/17/">art.17</a>.</li> \
        </ul>';
        // if same p is already in result, don't add it again
        let p_result = result.querySelectorAll('p');
        let found = false;
        p_result.forEach(function (element) {
            if (element.textContent == p.textContent) {
                found = true;
            }
        }
        );
        if (!found) {
            // remove all childre non .continues
                        // remove all childre non .continues
            let p_delete = result.querySelectorAll('p:not(.continues)');
            p_delete.forEach(function (element) {
                result.removeChild(element);
            }
            );
            result.appendChild(p);
        }

        // interaction
        q_interact.addEventListener('change', interact_change);
        form.appendChild(q_interact);
        set_helps('q_interact');
    }
    else if (annex1A_safety == 2){
        // annex3
        q_annex3.addEventListener('change', annex3_change);
        form.appendChild(q_annex3);
        set_helps('q_annex3');
    }
}

// annex1B changes
function annex1B_change() {
    let annex1B = document.querySelector('input[name="q_annex1B"]:checked').value;
    let form = document.querySelector('form');

    reset_result();

    // remove all children after q_annex1B in form
    let next = q_annex1B.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_annex1B.nextElementSibling;
    }

    if (annex1B == 1){
        result.innerHTML = '<h2>Output</h2><p class="continues">Your AI System is exempted from AI Risk regulation</p>';
        //interaction
        q_interact.addEventListener('change', interact_change);
        form.appendChild(q_interact);
        set_helps('q_interact');
    }
    else if (annex1B == 2){
        //annex1A safety
        q_annex1A_safety.addEventListener('change', annex1A_safety_change);
        form.appendChild(q_annex1A_safety);
        set_helps('q_annex1A_safety');
    }
}

// generalpurpose changes
function generalpurpose_change() {
    let generalpurpose = document.querySelector('input[name="q_generalpurpose"]:checked').value;
    let form = document.querySelector('form');

    reset_result();

    // remove all children after q_generalpurpose in form
    let next = q_generalpurpose.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_generalpurpose.nextElementSibling;
    }

    if (generalpurpose == 1){
        // add p to result with continues class
        let p = document.createElement('p');
        p.className = 'continues';
        p.innerHTML = 'You have to follow General-Purpose AI Obligations in <a href="http://aicompass.barchero.it/article/53/">Article 53</a> of the AI Act. In summary, you must: \
            <ul> \
                <li>Create and maintain technical documentation: under <a href="http://aicompass.barchero.it/article/53/">Article 53(1)(a)</a>, you are required to create and maintain technical documentation for the AI model and provide it to the AI Office upon request;</li> \
                <li>Provider documentation: According to <a href="http://aicompass.barchero.it/article/53/">Article 53(1)(b)</a>, you must create and keep documentation for providers integrating your AI models, ensuring a balance between transparency and the protection of intellectual property (IP);</li> \
                <li>Copyright compliance: As per <a href="http://aicompass.barchero.it/article/53/">Article 53(1)(c)</a>, you need to put in place a policy to ensure that your AI model complies with Union copyright law;</li> \
                <li>Training data summary: Under Article <a href="http://aicompass.barchero.it/article/53/">Article 53(1)(d)</a>, you are required to publish a publicly available summary of the AI model’s training data, following the template provided by the AI Office;</li> \
                <li>Additionally, under <a href="http://aicompass.barchero.it/article/85/">Article 85</a>, consider whether the General Purpose AI (GPAI) is used as, or forms a component of, an AI system. If it does, obligations on high-risk AI systems may apply either directly or indirectly.</li> \
            </ul>';
        // if same p is already in result, don't add it again
        let p_result = result.querySelectorAll('p');
        let found = false;
        p_result.forEach(function (element) {
            if (element.textContent == p.textContent) {
                found = true;
            }
        }
        );
        if (!found) {
            // remove all childre non .continues
                        // remove all childre non .continues
            let p_delete = result.querySelectorAll('p:not(.continues)');
            p_delete.forEach(function (element) {
                result.removeChild(element);
            }
            );
            result.appendChild(p);
        }

        q_annex1B.addEventListener('change', annex1B_change);
        form.appendChild(q_annex1B);
        set_helps('q_annex1B');
    }
    else if (generalpurpose == 2){
        q_annex1B.addEventListener('change', annex1B_change);
        form.appendChild(q_annex1B);
        set_helps('q_annex1B');
    }
}
// excluded2 changes
function excluded2_change() {
    let excluded2 = document.querySelector('input[name="q_excluded2"]:checked').value;
    let form = document.querySelector('form');

    reset_result();

    // remove all children after q_excluded2 in form
    let next = q_excluded2.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_excluded2.nextElementSibling;
    }

    if (excluded2 == 1){
        result.innerHTML = '<h2>Output</h2><p>Your AI System is not regulated by the EU AI Act</p>';
    }
    else if (excluded2 == 2){
        //generalpurpose
        q_generalpurpose.addEventListener('change', generalpurpose_change);
        form.appendChild(q_generalpurpose);
        set_helps('q_generalpurpose');
    }
}

// if q_prohibited changes, show the next question
function prohibited_change() {
    let prohibited = document.querySelector('input[name="q_prohibited"]:checked').value;
    let form = document.querySelector('form');

    reset_result();

    // remove all children after q_prohibited in form
    let next = q_prohibited.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_prohibited.nextElementSibling;
    }

    if (prohibited == 1){
        result.innerHTML = '<h2>Output</h2><p>Your AI System is prohibited</p>';
    }
    else if (prohibited == 2){
        // excluded2
        q_excluded2.addEventListener('change', excluded2_change);
        form.appendChild(q_excluded2);
        set_helps('q_excluded2');
    }
}

// if q_established changes, show the next question
function established_change() {
    let established = document.querySelector('input[name="q_established"]:checked').value;
    let form = document.querySelector('form');

    reset_result();

    // remove all children after q_established in form
    let next = q_established.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_established.nextElementSibling;
    }

    if (established == 1){
        // prohibited
        q_prohibited.addEventListener('change', prohibited_change);
        form.appendChild(q_prohibited);
        set_helps('q_prohibited');
    }
    else if (established == 2){
        // not regulated
        result.innerHTML = '<h2>Output</h2><p>Your AI System is not regulated by the EU AI Act</p>';
    }
}

// if q_usedEU changes, show the next question
function usedEU_change() {
    let usedEU = document.querySelector('input[name="q_usedEU"]:checked').value;
    let form = document.querySelector('form');

    reset_result();

    // remove all children after q_usedEU in form
    let next = q_usedEU.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_usedEU.nextElementSibling;
    }

    if (usedEU == 1){
        q_prohibited.addEventListener('change', prohibited_change);
        form.appendChild(q_prohibited);
        set_helps('q_prohibited');
    }
    else if (usedEU == 2){
        // established
        q_established.addEventListener('change', established_change);
        form.appendChild(q_established);
        set_helps('q_established');
    }
}

// if q_trademark changes, show the next question
function trademark_change() {
    let trademark = document.querySelector('input[name="q_trademark"]:checked').value;
    let form = document.querySelector('form');

    reset_result();

    // remove all children after q_trademark in form
    let next = q_trademark.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_trademark.nextElementSibling;
    }

    if (trademark == 1){
        // prompt that you are conform as a provider
        window.alert('You are conform as a provider');

        q_usedEU.addEventListener('change', usedEU_change);
        form.appendChild(q_usedEU);
        set_helps('q_usedEU');
    }
    else if (trademark == 2){
        // established
        q_established.addEventListener('change', established_change);
        form.appendChild(q_established);
        set_helps('q_established');
    }
}

// marketyourname changes
function marketyourname_change() {
    let marketyourname = document.querySelector('input[name="q_marketyourname"]:checked').value;
    let form = document.querySelector('form');

    reset_result();

    // remove all children after q_marketyourname in form
    let next = q_marketyourname.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_marketyourname.nextElementSibling;
    }

    if (marketyourname == 1){
        // prompt that you are conform as a provider
        window.alert('You are conform as a provider');

        q_usedEU.addEventListener('change', usedEU_change);
        form.appendChild(q_usedEU);
        set_helps('q_usedEU');
    }
    else if (marketyourname == 2){
        // no regulated
        result.innerHTML = '<h2>Output</h2><p>Your AI System is not regulated by the EU AI Act</p>';
    }
}

// annex1A changes
function annex1A_change() {
    let annex1A = document.querySelector('input[name="q_annex1A"]:checked').value;
    let form = document.querySelector('form');

    reset_result();

    // remove all children after q_annex1A in form
    let next = q_annex1A.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_annex1A.nextElementSibling;
    }

    if (annex1A == 1){
        q_marketyourname.addEventListener('change', marketyourname_change);
        form.appendChild(q_marketyourname);
        set_helps('q_marketyourname');
    }
    else if (annex1A == 2){
        // not regulated
        result.innerHTML = '<h2>Output</h2><p>Your AI System is not regulated by the EU AI Act</p>';
    }
}

// if q_safe changes, show the next question
function safety_change() {
    let safety = document.querySelector('input[name="q_safety"]:checked').value;
    let form = document.querySelector('form');

    reset_result();

    // remove all children after q_safety in form
    let next = q_safety.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_safety.nextElementSibling;
    }

    if (safety == 1){
        q_annex1A.addEventListener('change', annex1A_change);
        form.appendChild(q_annex1A);
        set_helps('q_annex1A');
    }
    else if (safety == 2){
        // not regulated
        result.innerHTML = '<h2>Output</h2><p>Your AI System is not regulated by the EU AI Act</p>';
    }
}

// if q_entity changes, show the next question
function entity_change() {
    let entity = document.querySelector('input[name="q_entity"]:checked').value;
    let form = document.querySelector('form');

    reset_result();

    // remove all children after q_entity in form
    let next = q_entity.nextElementSibling;
    while (next) {
        form.removeChild(next);
        next = q_entity.nextElementSibling;
    }

    if (entity == 1){
        q_usedEU.addEventListener('change', usedEU_change);
        form.appendChild(q_usedEU);
        set_helps('q_usedEU');
    }
    else if (entity == 2){
        q_trademark.addEventListener('change', trademark_change);
        form.appendChild(q_trademark);
        set_helps('q_trademark');
    }
    else if (entity == 3){
        q_safety.addEventListener('change', safety_change);
        form.appendChild(q_safety);
        set_helps('q_safety');
    }
}

function set_helps(question) {
    // remove innerHTML of .summary after h4
    // append to .summary the summary correspondant to the question as InnerHTML

    summary.innerHTML = " \
        <h3>Helpdesk</h3> \
        <h4>Summary of the article</h4> \
        " + summaries[question];

    // scrape the div element with classname = "et_pb_module et_pb_post_content et_pb_post_content_0_tb_body"
    // from the page http://aicompass.barchero.it + QuestionToArticle[question]

    definitions.innerHTML = " \
        <h3>Helpdesk</h3> \
        <h4>Definitions</h4> \
    ";

    let url = 'http://aicompass.barchero.it' + QuestionToArticle[question];
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, 'text/html');
            let article = doc.querySelector('.et_pb_module.et_pb_post_content.et_pb_post_content_0_tb_body');
            // for each word in defs dictionary, search if it is in the article. Attention to case insensitive
            let words = Object.keys(defs);
            words.forEach(function (word) {
                let re = new RegExp(word, 'gi');
                let found = article.innerHTML.match(re);
                if (found) {
                    definitions.innerHTML += '<strong>' + word + '</strong>: ' + defs[word] + '<br>';
                }
            }
            );
        }
        );
}


function init() {
    createForms();

    result = document.getElementById('ai_evaluator_results');
    summary = document.querySelector('.summary');
    definitions = document.querySelector('.definitions');

    reset_result();

    q_entity.addEventListener('change', entity_change);

    let form = document.querySelector('form');
    form.appendChild(q_entity);
    set_helps('q_entity');
}

window.addEventListener('load', init);