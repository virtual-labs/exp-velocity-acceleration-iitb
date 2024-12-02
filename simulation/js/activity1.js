let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Velocity and Acceleration</h5>
        <p>Learning Objective: Calculate velocity and acceleration</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Caculate', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>The Velocity in a fluid flow is given as <span style='display: inline-block;' >$$ V \\ = \\ 5x^3\\hat{i} \\ + \\ 9x^2y\\hat{j} \\ + \\ 3t\\hat{k} $$</span>. Find the velocity &  acceleration at (${x}, ${y}, ${w}) at t=2</h5>

        <br>

        <br><br>
        <h5>let Depth of immersion be h<sub>w</sub></h5>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ u = 5x^3 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp' > <span id='cal01-val-sp'></span>
            <br>
            <span style='display: inline-block;' >
                $$ v = -9x^2y $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp' > <span id='cal02-val-sp'></span>
            <br>
            <span style='display: inline-block;' >
                $$ w = 3t $$
             </span>
             = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp' > <span id='cal03-val-sp'></span>
        </p>


        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify0();'  id='temp-btn-0' >Verify</button></div>



        <div id='a1-1' style='display: none;'>


                <p style='text-align: center;'> 
                    Resultant velocity
                    <span style='display: inline-block;' > $$ = \\sqrt{u^2 + v^2 + w^2} $$ </span>  
                    = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal-inp' > <span id='cal-val-sp'></span>
                </p>

                <p>Calculate Acceleration</p>

                <p style='text-align: center; font-size: 18px;'>
                    <span style='display: inline-block;' >
                        $$ \\frac{&part; u}{&part; x} $$
                    </span>
                    = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cal11-inp' > <span id='cal11-val-sp'></span> ,

                    <span style='display: inline-block;' >
                        $$ \\frac{&part; u}{&part; y} $$
                    </span>
                    = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cal12-inp' > <span id='cal12-val-sp'></span> ,

                    <span style='display: inline-block;' >
                        $$ \\frac{&part; u}{&part; z} $$
                    </span>
                    = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cal13-inp' > <span id='cal13-val-sp'></span> ,

                    <span style='display: inline-block;' >
                        $$ \\frac{&part; u}{&part; t} $$
                    </span>
                    = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cal14-inp' > <span id='cal14-val-sp'></span> 
                </p>

                <p style='text-align: center; font-size: 18px;'>
                    <span style='display: inline-block;' >
                        $$ \\frac{&part; v}{&part; x} $$
                    </span>
                    = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cal21-inp' > <span id='cal21-val-sp'></span> ,

                    <span style='display: inline-block;' >
                        $$ \\frac{&part; v}{&part; y} $$
                    </span>
                    = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cal22-inp' > <span id='cal22-val-sp'></span> ,

                    <span style='display: inline-block;' >
                        $$ \\frac{&part; v}{&part; z} $$
                    </span>
                    = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cal23-inp' > <span id='cal23-val-sp'></span> ,

                    <span style='display: inline-block;' >
                        $$ \\frac{&part; v}{&part; t} $$
                    </span>
                    = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cal24-inp' > <span id='cal24-val-sp'></span> 
                    
                </p>


                <p style='text-align: center; font-size: 18px;'>
                    <span style='display: inline-block;' >
                        $$ \\frac{&part; w}{&part; x} $$
                    </span>
                    = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cal31-inp' > <span id='cal31-val-sp'></span> ,

                    <span style='display: inline-block;' >
                        $$ \\frac{&part; w}{&part; y} $$
                    </span>
                    = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cal32-inp' > <span id='cal32-val-sp'></span> ,

                    <span style='display: inline-block;' >
                        $$ \\frac{&part; w}{&part; z} $$
                    </span>
                    = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cal33-inp' > <span id='cal33-val-sp'></span> ,

                    <span style='display: inline-block;' >
                        $$ \\frac{&part; w}{&part; t} $$
                    </span>
                    = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cal34-inp' > <span id='cal34-val-sp'></span>  
                </p>

                <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1();'  id='temp-btn-120' >Verify</button></div>


                <div id='a1-2' style='display: none;'>
                
                    <p style='text-align: center;'> <span style='display: inline-block; font-size: 22px;' >
                        <span style='display: inline-block;' >
                            $$ a_x = u\\frac{&part; u}{&part; x} + v\\frac{&part; u}{&part; y} + w\\frac{&part; u}{&part; z} + \\frac{&part; u}{&part; t} $$
                        </span>
                        = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cale1-inp' > <span id='cale1-val-sp'></span>  
                        <br>
                        <span style='display: inline-block;' >
                            $$ a_y = u\\frac{&part; v}{&part; x} + v\\frac{&part; v}{&part; y} + w\\frac{&part; v}{&part; z} + \\frac{&part; v}{&part; t} $$
                        </span>
                        = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cale2-inp' > <span id='cale2-val-sp'></span>  
                        <br>
                        <span style='display: inline-block;' >
                            $$ a_z = u\\frac{&part; w}{&part; x} + v\\frac{&part; w}{&part; y} + w\\frac{&part; w}{&part; z} + \\frac{&part; w}{&part; t} $$
                        </span>
                        = <input type='number' class='form-control' style='display: inline !important; width: 100px;' id='cale3-inp' > <span id='cale3-val-sp'></span>  
                    </p>

                    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_e();'  id='temp-btn-10' >Verify</button></div>

                    <div id='a1-e' style='display: none;>

                        <p style='text-align: center; font-size: 22px;'> 
                            Resultant acceleration
                            <span style='display: inline-block;' > $$ = \\sqrt{a_x^2 + a_y^2 + a_z^2} $$ </span>  
                            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal1-inp' > <span id='cal1-val-sp'></span>
                        </p>

                        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2();'  id='temp-btn-121' >Verify</button></div>

                    </div>
 

                </div>
        </div>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        show_step('tb1-box');
    }, 150);
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculations();
}
function internal_calculations() {
    // x = 2;
    // y = 2;
    // z = 3;
    t = 2;
    u = 5 * Math.pow(x, 3);
    v = -9 * Math.pow(x, 2) * y;
    w = 3 * t;
    res_velocity = Math.sqrt(Math.pow((5 * Math.pow(x, 3)), 2) + Math.pow((-9 * Math.pow(x, 2) * y), 2) + Math.pow((3 * t), 2));
    //for u
    acceleration_mat[0][0] = 15 * Math.pow(x, 2);
    acceleration_mat[0][1] = 0;
    acceleration_mat[0][2] = 0;
    acceleration_mat[0][3] = 0;
    //for v
    acceleration_mat[1][0] = -18 * x * y;
    acceleration_mat[1][1] = -9 * Math.pow(x, 2);
    acceleration_mat[1][2] = 0;
    acceleration_mat[1][3] = 0;
    //for w
    acceleration_mat[2][0] = 0;
    acceleration_mat[2][1] = 0;
    acceleration_mat[2][2] = 0;
    acceleration_mat[2][3] = 3;
}
function verify0() {
    let btn = (document.getElementById('temp-btn-0'));
    console.log(`u = ${u} \n v = ${v} \n w = ${w} `);
    let inp1 = (document.getElementById('cal01-inp'));
    let sp1 = (document.getElementById('cal01-val-sp'));
    let inp2 = (document.getElementById('cal02-inp'));
    let sp2 = (document.getElementById('cal02-val-sp'));
    let inp3 = (document.getElementById('cal03-inp'));
    let sp3 = (document.getElementById('cal03-val-sp'));
    if (!verify_values(parseFloat(inp1.value), u)) {
        alert('u is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), v)) {
        alert('v is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), w)) {
        alert('w is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${u.toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${v.toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${w.toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    let d = document.getElementById('a1-1');
    d.style.display = 'block';
}
function verify_a1() {
    let btn = (document.getElementById('temp-btn-120'));
    console.log(`velocity = ${res_velocity}`);
    console.log(acceleration_mat);
    let inp = (document.getElementById('cal-inp'));
    let sp = (document.getElementById('cal-val-sp'));
    if (!verify_values(parseFloat(inp.value), res_velocity)) {
        alert('weight is incorrect, calculate again.');
        return;
    }
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 4; j++) {
            let inp0 = (document.getElementById(`cal${i}${j}-inp`));
            if (!verify_values(parseFloat(inp0.value), acceleration_mat[i - 1][j - 1])) {
                alert(`row ${i} and column ${j} is incorrect , calculate again.`);
                return;
            }
        }
    }
    btn.remove();
    inp.remove();
    sp.innerHTML = `${parseFloat(res_velocity.toFixed(2))}`;
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 4; j++) {
            let inp0 = (document.getElementById(`cal${i}${j}-inp`));
            let sp0 = (document.getElementById(`cal${i}${j}-val-sp`));
            inp0.remove();
            sp0.innerText = `${acceleration_mat[i - 1][j - 1].toFixed(3)}`;
        }
    }
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    //calculation for resultrant accn
    ax =
        u * acceleration_mat[0][0] +
            v * acceleration_mat[0][1] +
            w * acceleration_mat[0][2] +
            acceleration_mat[0][3];
    ay =
        u * acceleration_mat[1][0] +
            v * acceleration_mat[1][1] +
            w * acceleration_mat[1][2] +
            acceleration_mat[1][3];
    az =
        u * acceleration_mat[2][0] +
            v * acceleration_mat[2][1] +
            w * acceleration_mat[2][2] +
            acceleration_mat[2][3];
    res_acceleration = Math.sqrt(Math.pow(ax, 2) + Math.pow(ay, 2) + Math.pow(az, 2));
    let d = document.getElementById('a1-2');
    d.style.display = 'block';
}
function verify_e() {
    let btn = (document.getElementById('temp-btn-10'));
    console.log(`ax = ${ax} \n ay = ${ay} \n az = ${az} `);
    let inp1 = (document.getElementById('cale1-inp'));
    let sp1 = (document.getElementById('cale1-val-sp'));
    let inp2 = (document.getElementById('cale2-inp'));
    let sp2 = (document.getElementById('cale2-val-sp'));
    let inp3 = (document.getElementById('cale3-inp'));
    let sp3 = (document.getElementById('cale3-val-sp'));
    if (!verify_values(parseFloat(inp1.value), ax)) {
        alert('u is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), ay)) {
        alert('v is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), az)) {
        alert('w is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${ax.toFixed(3)}`;
    inp2.remove();
    sp2.innerText = `${ay.toFixed(3)}`;
    inp3.remove();
    sp3.innerText = `${az.toFixed(3)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    let d = document.getElementById('a1-e');
    d.style.display = 'block';
}
function verify2() {
    console.log(`acceleration => ${res_acceleration}`);
    let btn = (document.getElementById('temp-btn-121'));
    let inp2 = (document.getElementById('cal1-inp'));
    let sp2 = (document.getElementById('cal1-val-sp'));
    if (!verify_values(parseFloat(inp2.value), res_acceleration)) {
        alert('resultant acceleration is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp2.remove();
    sp2.innerText = `${res_acceleration.toFixed(3)}`;
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map