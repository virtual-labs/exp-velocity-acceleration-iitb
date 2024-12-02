function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Determine the flow type. </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Determine the flow type", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <h5>A fluid flow is given by <span style='display: inline-block;' >$$ V = x^2y\\hat{i} + y^2z\\hat{j} - (2xyz + yz^2)\\hat{k} $$</span></h5>

        <p>For below inputs only type the expression without space. For exponents you may write it as x<sup>2</sup> = x^2.</p>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ u = x^2y $$
            </span>
            <br>
            <span style='display: inline-block;' >
                $$ v = y^2z $$
            </span>
            <br>
            <span style='display: inline-block;' >
                $$ w = -(2xyz + yz^2) $$
            </span>
        </p>


        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ \\frac{&part; u}{&part; x} $$
            </span>
            = <input type='text' class='form-control' style='display: inline !important; width: 200px;' id='cala21-inp' > <span id='cala21-val-sp'></span>
        </p>

        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ \\frac{&part; v}{&part; y} $$
            </span>
            = <input type='text' class='form-control' style='display: inline !important; width: 200px;' id='cala22-inp' > <span id='cala22-val-sp'></span>
        </p>

        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ \\frac{&part; w}{&part; z} $$
            </span>
            = <input type='text' class='form-control' style='display: inline !important; width: 200px;' id='cala23-inp' > <span id='cala23-val-sp'></span>
        </p>


        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ \\frac{&part; u}{&part; x} + \\frac{&part; v}{&part; y} + \\frac{&part; w}{&part; z} $$
            </span>
            = <input type='text' class='form-control' style='display: inline !important; width: 200px;' id='cala24-inp' > <span id='cala24-val-sp'></span>
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify3();'  id='temp-btn-122' >Verify</button></div>

   
    </div>

    `;
    maindiv.innerHTML += text;
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function load_question() {
    let ele = document.getElementById('tb2-box');
    let ques = new Updated_Question('Regarding the flow above please select the correct option.', [
        'Steady Incompressible Flow',
        'Unsteady Incompressible Flow',
        'Steady Compressible Flow',
        'Unsteady Compressible Flow'
    ], '1', ele, () => { activity3(); });
    ques.load_question();
}
function verify3() {
    let btn = document.getElementById('temp-btn-122');
    console.log(`diff_ux = ${diff_ux} \n diff_vy = ${diff_vy} \n diff_wz = ${diff_wz} \n last expression = 0`);
    console.log(acceleration_mat);
    let inp = document.getElementById('cala21-inp');
    let sp = document.getElementById('cala21-val-sp');
    let inp1 = document.getElementById('cala22-inp');
    let sp1 = document.getElementById('cala22-val-sp');
    let inp2 = document.getElementById('cala23-inp');
    let sp2 = document.getElementById('cala23-val-sp');
    let inp3 = document.getElementById('cala24-inp');
    let sp3 = document.getElementById('cala24-val-sp');
    if (!(inp.value == diff_ux)) {
        alert('First expression is incorrect, Enter the correction expression');
        return;
    }
    if (!(inp1.value == diff_vy)) {
        alert('Second expression is incorrect, Enter the correction expression');
        return;
    }
    if (!(inp2.value == diff_wz)) {
        alert('Third expression is incorrect, Enter the correction expression');
        return;
    }
    if (!(inp3.value == a2_exp)) {
        alert('Last expression is incorrect, Enter the correction expression');
        return;
    }
    alert('You have entered correct values');
    btn.remove();
    inp.remove();
    sp.innerText = `${diff_ux}`;
    inp1.remove();
    sp1.innerText = `${diff_vy}`;
    inp2.remove();
    sp2.innerText = `${diff_wz}`;
    inp3.remove();
    sp3.innerText = `${a2_exp}`;
    load_question();
}
//# sourceMappingURL=activity2.js.map