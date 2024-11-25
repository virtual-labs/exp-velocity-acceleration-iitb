function activity3() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Find the velocity component.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Find the velocity component", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <h5>A steady incompressible fluid  flow having two velocity component as given below: </h5>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ u = x^2 + y^2 + z^2 $$
            </span>
            <br>
            <span style='display: inline-block;' >
                $$ v = xy^2 - yz^2 + xy $$
            </span>
            <br>
            <span style='display: inline-block;' >
                Find the third velocity component.
            </span>
        </p>


        <p>For below inputs only type the expression without space. For exponents you may write it as x<sup>2</sup> = x^2.</p>


        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ \\frac{&part; u}{&part; x} $$
            </span>
            = <input type='text' class='form-control' style='display: inline !important; width: 200px;' id='cala31-inp' > <span id='cala31-val-sp'></span>
        </p>


        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ \\frac{&part; v}{&part; y} $$
            </span>
            = <input type='text' class='form-control' style='display: inline !important; width: 200px;' id='cala32-inp' > <span id='cala32-val-sp'></span>
        </p>


        <h5>Continuity equation for steady incompresible flow </h5>


        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ \\frac{&part; u}{&part; x} + \\frac{&part; v}{&part; y} + \\frac{&part; w}{&part; z} = 0 $$
            </span>
        </p>


        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ \\frac{&part; w}{&part; z} $$
            </span>
            = <input type='text' class='form-control' style='display: inline !important; width: 200px;' id='cala33-inp' > <span id='cala33-val-sp'></span>
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify4();'  id='temp-btn-300' >Verify</button></div>

        <div id='a3-2' style="display: none;">

            <p style='text-align: center;'> <span style='display: inline-block;' >
                <span style='display: inline-block;' >
                    $$ \\int dw = \\int (-3x -2xy + z^2) dz $$
                </span>
            </p>

            <p style='text-align: center; font-size: 18px;'>
                <span style='display: inline-block;' >
                    $$ w $$
                </span>
                = <input type='text' class='form-control' style='display: inline !important; width: 200px;' id='cala34-inp' > <span id='cala34-val-sp'></span> + <span style='display: inline-block;' > $$ f(x, y) $$ </span>
            </p>


            <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify5();'  id='temp-btn-301' >Verify</button></div>

        </div>

    
    </div>

    `;
    maindiv.innerHTML += text;
    setTimeout(() => { show_step('tb3-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify4() {
    let btn = document.getElementById('temp-btn-300');
    console.log(`diff_ux = ${diff3_ux} \n diff_vy = ${diff3_vy} \n diff_wz = ${diff3_wz}`);
    let inp1 = document.getElementById('cala31-inp');
    let sp1 = document.getElementById('cala31-val-sp');
    let inp2 = document.getElementById('cala32-inp');
    let sp2 = document.getElementById('cala32-val-sp');
    let inp3 = document.getElementById('cala33-inp');
    let sp3 = document.getElementById('cala33-val-sp');
    if (!(inp1.value == diff3_ux)) {
        alert('First expression is incorrect, Enter the correction expression');
        return;
    }
    if (!(inp2.value == diff3_vy)) {
        alert('Second expression is incorrect, Enter the correction expression');
        return;
    }
    if (!(inp3.value == diff3_wz)) {
        alert('Third expression is incorrect, Enter the correction expression');
        return;
    }
    alert('You have entered correct values');
    btn.remove();
    inp1.remove();
    sp1.innerHTML = `<span style='display: inline-block;' > $$ 2x $$ </span>`;
    inp2.remove();
    sp2.innerHTML = `<span style='display: inline-block;' > $$ 2xy - z^2 + x $$ </span>`;
    inp3.remove();
    sp3.innerHTML = `<span style='display: inline-block;' > $$ -3x - 2xy + z^2 $$ </span>`;
    setTimeout(() => { MathJax.typeset(); }, 300);
    let d = document.getElementById('a3-2');
    d.style.display = 'block';
}
function verify5() {
    let btn = document.getElementById('temp-btn-301');
    console.log(`a3_exp = ${a3_exp}`);
    let inp1 = document.getElementById('cala34-inp');
    let sp1 = document.getElementById('cala34-val-sp');
    if (!(inp1.value == a3_exp)) {
        alert('Expression is incorrect, Enter the correction expression');
        return;
    }
    alert('You have entered correct values');
    btn.remove();
    inp1.remove();
    sp1.innerHTML = `<span style='display: inline-block;' > $$ -3xz - 2xyz + \\frac{z^3}{3} $$ </span>`;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//# sourceMappingURL=activity3.js.map