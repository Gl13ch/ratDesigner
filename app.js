// https://developer.mozilla.org/en-US/docs/Web/API/File/File

// SVG TEST
const color = '%236495ED';

const fileContent = `<svg width="800" height="600" viewBox="0 0 211.66666 158.75" id="svg1" xmlns="http://www.w3.org/2000/svg"><defs id="defs1"><linearGradient id="linearGradient6"><stop style="stop-color:%23d54040;stop-opacity:1;" offset="0.56782335" id="stop5"/><stop style="stop-color:%23962020;stop-opacity:1;" offset="0.56782335" id="stop6"/></linearGradient><linearGradient id="linearGradient9" label="cageTop"><stop style="stop-color:%23000000;stop-opacity:1;" offset="0" id="stop3"/><stop style="stop-color:%23000000;stop-opacity:0.50289017;" offset="0.12933758" id="stop4"/><stop style="stop-color:%23000000;stop-opacity:0;" offset="0.47949526" id="stop7"/><stop style="stop-color:%23000000;stop-opacity:0.49710983;" offset="0.91798109" id="stop8"/> <stop style="stop-color:%23000000;stop-opacity:1;" offset="1" id="stop9"/></linearGradient> <linearGradient id="linearGradient1"><stop style="stop-color:%23aaaaaa;stop-opacity:1;" offset="0.56782335" id="stop1" /><stop style="stop-color:%238f8f8f;stop-opacity:1;" offset="0.56782335" id="stop2"/></linearGradient><linearGradient href="%23linearGradient36" id="linearGradient32" gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.463297,0,0,3.6196022,-381.19468,-255.134)" x1="91.790207" y1="99.727722" x2="125.77905" y2="99.727722"/><linearGradient id="linearGradient36"><stop style="stop-color:%23d95151;stop-opacity:1;" offset="0.56782335" id="stop35" /><stop style="stop-color:%23d54646;stop-opacity:1;" offset="0.56782335" id="stop36"/></linearGradient><linearGradient href="%23linearGradient1" id="linearGradient33" gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.3588926,0,0,3.7853234,-369.83707,-265.20596)" x1="91.488373" y1="84.336685" x2="125.31618" y2="84.336685"/><pattern href="%23Strips2_1-8" preserveAspectRatio="xMidYMid" id="pattern78-3" patternTransform="matrix(2.4159799,0,0,2.1451973,-334.99722,-246.07647)" x="0" y="0" width="4.8"/><pattern patternUnits="userSpaceOnUse" width="1.5" height="1" patternTransform="translate(0,0) scale(2,2)" preserveAspectRatio="xMidYMid" id="Strips2_1-8" style="fill:%23000000"><rect style="stroke:none" x="0" y="-0.5" width="1" height="2" id="rect197-7"/></pattern><linearGradient href="%23linearGradient6" id="linearGradient34" gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.4099884,0,0,3.6171823,-185.02341,-415.4899)" x1="91.246407" y1="95.881386" x2="126.56123" y2="95.881386" /><linearGradient href="%23linearGradient9" id="linearGradient13" x1="95.937462" y1="51.172043" x2="130.74881" y2="51.172043" gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.3588995,0,0,3.6196079,-390.06301,-93.305413)"/></defs><g groupmode="layer" id="layer4" label="athleticCage" transform="translate(-4.2970215,1.7693618)"><path style="display:inline;fill:url(%23linearGradient32);fill-opacity:1;stroke:%23000000;stroke-width:1.02993;stroke-dasharray:none;stroke-opacity:1" d="m 28.492269,89.63366 v 25.04718 l 90.839651,7.36684 60.86267,-6.63014 -2.72518,-22.83715 -59.95423,6.630151 z" id="path3-3"/><path style="display:inline;fill:url(%23linearGradient33);fill-opacity:1;fill-rule:nonzero;stroke:%23000000;stroke-width:1.55541;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" d="m 30.01941,11.968306 -1.068497,70.4384 90.821737,13.696336 56.63005,-11.739735 -3.20545,-71.416698 -60.90403,0.978308 z" id="path1-1"/><path style="display:inline;fill:url(%23pattern78-3);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.86544;stroke-dasharray:none;stroke-opacity:1;paint-order:markers fill stroke" d="m 31.163098,14.755161 -1.034366,66.12634 87.919798,12.857883 54.82068,-11.021058 -3.10307,-67.044751 -58.95805,0.918417 z" id="path68-98"/><path style="display:inline;fill:url(%23linearGradient34);fill-opacity:1;stroke:url(%23linearGradient13);stroke-width:1.74773;stroke-linejoin:bevel;stroke-dasharray:none" d="m 28.118756,81.956775 v 15.39357 l 90.861664,4.527515 60.87749,-4.074752 -2.72592,-14.035321 -59.9688,4.074786 z" id="path4-6" /><path style="display:inline;opacity:1;fill:%23ffffff;fill-opacity:0;stroke:%23ffffff;stroke-width:2.96367;stroke-linecap:butt;stroke-linejoin:miter;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="m 27.439267,90.403299 c 194.490943,8.728317 0,0 0,0 z" id="path38" /><path style="display:inline;opacity:1;fill-opacity:1;stroke:${color};stroke-width:2.7077;stroke-linecap:butt;stroke-linejoin:bevel;stroke-dasharray:none;stroke-opacity:1" d="m 176.84199,89.890249 c -139.243324,10.176311 0,0 0,0 z" id="path39" /></g></svg>`

const svg = new File([fileContent], "test.svg", { type: "image/svg+xml" })

function getFileContent(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
        resolve(event.target.result);
        };

        reader.onerror = (error) => {
        reject(error);
        };

        reader.readAsText(file);
    });
}

getFileContent(svg)
.then((content) => {
    const image = document.getElementById('image')
    image.src = `data:image/svg+xml;charset=utf-8,${content}`
})
.catch((error) => {
    console.error('Error reading file:', error);
})