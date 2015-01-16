// ==UserScript==
// @name         TSH Enhancements
// @version      0.1
// @description  Enhancements to TSH
// @match        https://torrentshack.eu/*
// @grant        none
// ==/UserScript==

(function() 
{
    // 1: Add text of why a torrent was NUKED in the page.
    document.body.innerHTML = document.body.innerHTML.replace(/title="(.*)">Nuked<\/span>/g, "><b>Nuked</b> <- $1</span>");
    // 1: END
    
    // 2: Get the table element of all torrent.
    var container = document.getElementById('torrent_table');
    
    // Grab all tags
    var spanArray = container.getElementsByClassName('tags');
    
    for(var s=0; s<spanArray.length; s++)
    {
        // - Add icons for Music Genres
        // http://www.dustball.com/icons/ is a CDN I found that hosts the Silk icon set from FamFamFam
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>House<\/a>/g, '><img src="http://www.dustball.com/icons/icons/house.png" alt="House"/>House</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Electronic<\/a>/g, '><img src="http://www.dustball.com/icons/icons/computer.png" alt="Electronic"/>Electronic</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>PsychedelicRock<\/a>/g, '><img src="http://www.dustball.com/icons/icons/color_wheel.png" alt="PsychedelicRock"/>PsychedelicRock</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Trance<\/a>/g, '><img src="http://www.dustball.com/icons/icons/chart_line.png" alt="Trance"/>Trance</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Techno<\/a>/g, '><img src="http://www.dustball.com/icons/icons/keyboard.png" alt="Techno"/>Techno</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Pop<\/a>/g, '><img src="http://www.dustball.com/icons/icons/award_star_silver_3.png" alt="Pop"/>Pop</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Dance<\/a>/g, '><img src="http://www.dustball.com/icons/icons/group.png" alt="Dance"/>Dance</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Top40<\/a>/g, '><img src="http://www.dustball.com/icons/icons/award_star_gold_3.png" alt="Top40"/>Top40</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Hardcore<\/a>/g, '><img src="http://www.dustball.com/icons/icons/lightning.png" alt="Hardcore"/>Hardcore</a>');
        // - End Icons
        
        var nukeArray = spanArray[s].getElementsByClassName('browsenuke');
        
        for(var n=0; n<nukeArray.length; n++)
        {
            var element = nukeArray[n].parentNode.parentNode;
            
            element.style["background-color"] = "#FF3333";
            element.style["color"] = "#FFFFFF";
        }
    }
    // 2: END
})();