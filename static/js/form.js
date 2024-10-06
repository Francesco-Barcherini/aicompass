// create forms group for each question

let q_entity, q_trademark, q_usedEU, q_safety, q_annex1A, q_marketyourname, q_prohibited, q_excluded2, q_generalpurpose, q_annex1B, q_annex1A_safety, q_annex3, q_interact, q_mediacontent;

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

function init() {
    createForms();
    let form = document.querySelector('form');
    form.appendChild(q_entity);
}

window.addEventListener('load', init);