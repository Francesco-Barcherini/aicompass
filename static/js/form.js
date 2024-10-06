// create forms group for each question

let q_entity, q_trademark, q_usedEU, q_safety, q_annex1A, q_marketyourname, q_prohibited, q_excluded2, q_generalpurpose, q_annex1B, q_annex1A_safety, q_annex3, q_interact, q_mediacontent;
let result;

function createForms() {
    q_entity = document.createElement('div');
    q_entity.className = 'form-group';
    q_entity.id = 'q_entity';
    q_entity.innerHTML = ' \
        <div class="text_form"> \
            <label for="q_entity">Type of user</label> \
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
            <label for="q_trademark">Changes</label> \
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
            <label for="q_usedEU">Used in the EU</label> \
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
            <label for="q_safety">Safety</label> \
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
            <label for="q_annex1A">Annex IA</label> \
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
            <label for="q_marketyourname">Use of name</label> \
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
            <label for="q_prohibited">Prohibited</label> \
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
            <label for="q_excluded2">Excluded cases</label> \
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
            <label for="q_generalpurpose">General purpose</label> \
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
            <label for="q_annex1B">Annex IB</label> \
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
            <label for="q_annex1A_safety">Annex IA safety</label> \
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
            <label for="q_annex3">Annex III</label> \
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
            <label for="q_interact">Interaction</label> \
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
            <label for="q_mediacontent">Media content</label> \
            <p> Does your system generate audio, image, video or text content? </p> \
        </div> \
        <div class="form-check"> \
            <input class="form-check-input" type="radio" name="q_mediacontent" id="q_mediacontent1" value="1"> \
            <label class="form-check-label" for="q_mediacontent1">Yes</label> \
            <input class="form-check-input" type="radio" name="q_mediacontent" id="q_mediacontent2" value="2"> \
            <label class="form-check-label" for="q_mediacontent2">No</label> \
        </div>';
}

function reset_result() {
    result.innerHTML = '<h2>Output</h2><p>Answer to get more information</p>';
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
        p.textContent = 'You have no obligations from the AI Act';
        result.appendChild(p);
    }
    else if (mediacontent == 2){
        // add p to result
        let p = document.createElement('p');
        p.textContent = 'You must respect transparency obligations towards natural persons';
        result.appendChild(p);
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
        // add p to result with continues class
        let p = document.createElement('p');
        p.className = 'continues';
        p.innerHTML = 'You must respect transparency obligations towards natural persons';
        result.appendChild(p);

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
        p.textContent = 'Your AI System is under High-Risk AI systems\' regulation';
        result.appendChild(p);

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
        p.textContent = 'Your AI System is under High-Risk AI systems\' regulation';
        result.appendChild(p);

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
        result.innerHTML = '<h2>Output</h2><p>Your AI System is not regulated by the EU AI Act</p>';
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
        result.innerHTML = '<h2>Output</h2><p>Your AI System is not regulated by the EU AI Act</p>';
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
        // no obligations
        result.innerHTML = '<h2>Output</h2><p>Your AI System does not have obligations from the AI Act</p>';
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