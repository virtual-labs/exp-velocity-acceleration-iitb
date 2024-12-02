// all variables
let diameter = 1;
let height = parseFloat((Math.random() * 0.8 + 0.4).toFixed(1));
let weight = 0;
let h_w = 0;
let AB = 0;
let AG = 0;
let BG = 0;
let I = 0;
let v_w = 0;
let GM = 0;
//let z = 1000 * 9.81 * Math.PI/4 * diameter**2;
let p_diameter = 1;
let p_height = parseFloat((Math.random() * 0.8 + 0.4).toFixed(1));
let p_weight = 0;
let p_h_w = 0;
let p_AB = 0;
let p_AG = 0;
let p_BG = 0;
let p_I = 0;
let p_v_w = 0;
let p_GM = 0;
let M = [];
let M_abs = [];
let H = [];
// all variables
let neutral_height = 0;
let x = Math.floor(Math.random() * 2 + 1);
let y = Math.floor(Math.random() * 2 + 1);
let w = Math.floor(Math.random() * 2 + 1);
let t = 2;
let u = 5 * Math.pow(x, 3);
let v = -9 * Math.pow(x, 2) * y;
let z = 3 * t;
let ax = 0;
let ay = 0;
let az = 0;
let res_velocity = 0;
let acceleration_mat = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
let res_acceleration = 0;
// for a2
const diff_ux = `2xy`;
const diff_vy = `2yz`;
const diff_wz = `-2xy-2yz`;
let a2_exp = '0';
// for a3
const diff3_ux = `2x`;
const diff3_vy = `2xy-z^2+x`;
const diff3_wz = `-3x-2xy+z^2`;
let a3_exp = '-3xz-2xyz+z^3/3';
//# sourceMappingURL=data.js.map