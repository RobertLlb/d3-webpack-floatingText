import * as d3 from 'd3';
import starWarsImage from './../assets/starwars.jpg';

export default function doAnimations() {
    let introductionTextDisappears = 2000;
    let logoTextAppears = introductionTextDisappears + 250;
    let logoTextFadeOut = logoTextAppears + 500;
    let logoTextFadeOutDuration = 2500;
    // let scrollDuration = 100;
    // let oneMinute = 50000;

    const introductionTextElement = document.getElementById('introductionText');
    const logoElement = document.getElementById('logo');
    const titlecontentElement = document.getElementById('titlecontent');

    // Apply class so that the scrolling text will scroll. Change color so it is visible.
    // TODO: Remove jQuery reference!!
    titlecontentElement.classList.add('scrollingText');
    titlecontentElement.style.color = '#ff6';

    // Intro text will disappear
    d3.select(introductionTextElement).transition().delay(introductionTextDisappears).style('opacity', '0');

    // Image will get smaller and disappear.
    logoElement.src = starWarsImage;
    d3.select(logoElement).transition().delay(logoTextAppears).style('opacity', '1');
    d3.select(logoElement).transition().delay(logoTextFadeOut)
        .duration(logoTextFadeOutDuration)
        .style('font-size', '5px').style('opacity', '0');
};