// create forms group for each question

let q_entity, q_trademark, q_usedEU, q_safety, q_annex1A, q_marketyourname, q_prohibited, q_excluded2, q_generalpurpose, q_annex1B, q_annex1A_safety, q_annex3, q_interact, q_mediacontent, q_established;
let result;

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
            <p> Is your system a General Puroose AI model? </p> \
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
        p.textContent = 'Transparency Obligations: Synthetic Content (<a href="http://aicompass.barchero.it/article/50/">art.50</a>):   \
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
        p.textContent = 'Transparency Obligations for Natural Persons (<a href="http://aicompass.barchero.it/article/50/">art.50</a>): \
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
        p.textContent = 'Transparency Obligations for Natural Persons (<a href="http://aicompass.barchero.it/article/50/">art.50</a>): \
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
    }
    else if (interact == 2){
        // mediacontent
        q_mediacontent.addEventListener('change', mediacontent_change);
        form.appendChild(q_mediacontent);
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
        p.textContent = 'Your AI System is under High-Risk AI systems\' regulation (<a href="http://aicompass.barchero.it/article/6/">art.6</a>): \
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
    }
    else if (annex3 == 2){
        // interaction
        q_interact.addEventListener('change', interact_change);
        form.appendChild(q_interact);
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
        p.textContent = 'Your AI System is under High-Risk AI systems\' regulation (<a href="http://aicompass.barchero.it/article/6/">art.6</a>): \
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
    }
    else if (annex1A_safety == 2){
        // annex3
        q_annex3.addEventListener('change', annex3_change);
        form.appendChild(q_annex3);
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
    }
    else if (annex1B == 2){
        //annex1A safety
        q_annex1A_safety.addEventListener('change', annex1A_safety_change);
        form.appendChild(q_annex1A_safety);
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
    }
    else if (generalpurpose == 2){
        q_annex1B.addEventListener('change', annex1B_change);
        form.appendChild(q_annex1B);
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
    }
    else if (usedEU == 2){
        // established
        q_established.addEventListener('change', established_change);
        form.appendChild(q_established);
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
    }
    else if (trademark == 2){
        // established
        q_established.addEventListener('change', established_change);
        form.appendChild(q_established);
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
    }
    else if (entity == 2){
        q_trademark.addEventListener('change', trademark_change);
        form.appendChild(q_trademark);
    }
    else if (entity == 3){
        q_safety.addEventListener('change', safety_change);
        form.appendChild(q_safety);
    }
}


function init() {
    createForms();

    result = document.getElementById('ai_evaluator_results');

    reset_result();

    q_entity.addEventListener('change', entity_change);

    let form = document.querySelector('form');
    form.appendChild(q_entity);
}

window.addEventListener('load', init);