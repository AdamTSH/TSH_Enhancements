// ==UserScript==
// @name         TSH Enhancements
// @version      0.1.1
// @description  Enhancements to TSH
// @match        https://torrentshack.eu/torrents.php*
// @grant        none
// @updateURL    https://github.com/AdamTSH/TSH_Enhancements/raw/master/TSH%20Enhancements.user.js
// ==/UserScript==

(function() 
{
    // 1: Add text of why a torrent was NUKED in the page.
    document.body.innerHTML = document.body.innerHTML.replace(/title="(.*)">(.*)Nuked<\/span>/g, "><b>$2Nuked</b> <- $1</span>");
    // 1: END
    
    // 2: Get the table element of all torrent.
    var container = document.getElementById('torrent_table');
    
    // Grab all tags
    var spanArray = container.getElementsByClassName('tags');
    
    for(var s = 0; s < spanArray.length; s++)
    {
        // 3: Add icons for Music Genres
        var musicIconStyle = "style=\"vertical-align:middle;padding-right:3px;\"";

        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>House<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK4SURBVDjLjZPrT1JhHMfPq/NH+K6ty2bhJcswzUa2hTMaEmCsZmWuUU0HQuAVEWHMgCnLy2yOhiOKIs0L08ByXgab1TTRNlO7ULwylTOZ9iL9djiVrdLmi++bZ7/P5znP93kOAYDYKt1F+0k6cR4ZK86jSCS3m9sW7pGxwh5FwlqfOmnNW34w7NUcInck6Ck+QNJgZNjExYTzOl67iuG/nQuf7kjEp2eT/xV45AlknyopMmLJweRDGR05Jt1KBDvLMdoiRp8uLeKpTiO3FHiUiWR/WTI12sBD8JEC/kYBvLXpeGrIwHCTGOPuKgxYRXCXsan7ilTyD0G/Opn0lqdQfisfwccq+JuEGKjjYHpqkklvLQc+iwiBe2p06/mwSVOo5kvJjISgCyLpgij/bQGCHWX0p4rgNZ7AyxdjWFxcxPLyMuZmZ+BUHUOHlodnd26g/eYpmIQsSn86niR81akBf9PZn+fMo+EsTIy/wtLSEgP/yuzbGbQUsnFXdhJd5gtoLMxAOWdvgKCb5Xr1aevDzXno0WZufHg3t7nz3/n08T1qclhouHgUZZl71ulwfxRYncZ9omGPWOstG6urq8ywUqmESqWCWq1GaWkpsxaNRmEx3YKaEz8Vg/+5RpPJtEJRFDMcA1tbW9HW1obKyspNQUwqkUj2bfkODAbDSiQSYYYrKipgs9lgt9tRU1OzKZDL5RAKhb8FRc8vJxR0nTsvtvMGxBb+N8dQO2ISjUYDh8MBp9MJWsysPXhjR0GnBGIbbzrbytGmaw/zCRr+LOu9iqrBEhT1FqDAmo9wOAydTgeXywW32426ujqEQiFoBlSoH9NDO6REvkOERFl8lKB3HqRtIdoWOC5Lp3jXchakUum80WhkQLoXmM1mCASC+dySMwvZtVlf0zWpYzT8ZfeVXYPEdr/pTvMdjX2sh+52/VQAAAAASUVORK5CYII=" alt="House" ' + musicIconStyle + '/>House</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Electronic<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAItSURBVDjLfVM7bBNBEH27d7alOKfYjsM3gFLjRCAgiAoFBAIhQUNJh0SLqGgpEQW2a6LQ8VGgAAqUBqWk4bAbDEgoNCALJNtJlKDzfZaZ2bNFUJI9zc7d7c57b3ZmlTEGuw3f9x9HUXQjDEOXPMiL9ft99s/UTgDNZnOMAuYLhcL1XG4EAQUhSSC7KaZYLGBp6S3c7YIbjcYlDi6Xywfz+TxWvv8AsyeJQWISAjKICSwIAritViuI4zhLJpsGMtl3u93/JaPT6RJQggsXL8s/l4MnJw+j11sVdsOPYZVGjD+IE6XiGN68foWjlePCzmuigFE5+O68T9sUlKLZTuLZ1tfW8ODWKWH86L8Hq91/5ZpVwFKZlTcWS+PQWkOR6dT4nQFMYhkrMyfl3aRnoFkBfROAhuM4W0ynngcfHjP+9law0KtJWqIgTMujtILjukN28ZwCeVs5y7jw5RE21iNRIQA88YFwCsw4tWdE8rdD4edqlCqwjHfG7yEpWUAmFwCd5sn27ev2HeloRwBsL9hKDRVkMi7u3zwm5QnDCJubgTBksxlKw0j3aWXXYo5MyygKKK+Hy8vvzg4ahXzJ87wprk673Q5IXY5T47jK9AyOHDogivbtnZBm23IX6vX6bQK5Onv6zDnPK+Dli6d/qOZP6Hxm6f/0v13KRmufhwC1Wm2CSvZrbu48Rj2PNsRwHU2g1Y1qtTq6020dXiaS3iH7sLj4/MSg/1PGT7td97+G8aA4FJOt1wAAAABJRU5ErkJggg==" alt="Electronic" ' + musicIconStyle + '/>Electronic</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>PsychedelicRock<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMOSURBVDjLVZNNaBxlAIafb+ab2Z3N7Oxv/nYTEyv2LzQJpKBgrQqNUKmY4kUIXqUHT70p9iB48CKIiN5E0It6KFiwiv9FpAVpKUggNc3mZ7vpJpv9n93ZnZ35PNRI+8B7e9/n9gqlFAeIVUfPeN3zh0R0eVpYM1OanhvTCEY0f3tU79+ctnpfHM73fuQhxIHAWHnmkOGXPjgZyS09l5hnNv4YOdMhoQmigzqGt4nhfeub1fpnVsl/e+hMv/q/QKy+Me0EO5dfso/OvzB8grgV4HGXJC7jwAQ2oxxDuC36xZ+Rhe+v6iutZf2iqklReNe0tPSHZ2Nz84ujR7ht3iJKjcexiOIQI8SiixxcR7QtRORFlK7O9t0rlyy4KBEj5+YisVeez85wy9zGIUeGDDYhDhYOITYuoh2BvTJ68y7B0GnCym8XGq+KL2U0MrE8Z2SRVhqdPmlCsvgk8RlCkgAivRbUNKj1YPMeeu4wcnjRql7/+jVpyvxsPjbK3whi5LEAB0WWgBRgqwAaFah04X4V7puwdwddz+FXjJMSbXI8aSTYCgU2oKMwEdgCEoDhug/G5SjsmFDUoV+DXJ7BnpiUVCNBaJqEXfDVfwG6CjoKnF4crZGCVvNBug0IPXzPZOCnAunfk8W6ro7H2gK3A02gGoDeA1MDGx2nkYG6C24bvDaMSzq7ZfxBsiC7O+aNDaWOn0oLfl0HMwDlQRCAHYUkEGvFkLsp2G9Bo0n41AiNG6sMBvY1yZr6/JsV//XZZ3WZaEp2t6DvgWFA1QRHQbwjSDeTUGvCiSPU1ovU/typQPIrTV0yrrl3vE+/+8XlaCIgq8H+BtSLUN2C2ibsl8ArR+HYGE0rwvbvRTr96HsL6od1CUDDf+enK92JwT+982cWEswvRmiug6qAr0E4AV4uoFXosnV1g8bN5kcp7E8eOZOYKtmUqm/ZiDdfPhV3Zp6IM5k0SIUBstwmXKvCX5UdM6y9n2b34wV1IXxEcEBU3J4dprU0zODpjFBTIyoIxgjXxlB/PIl1eUmdLjzc/xceOVXddrB6BQAAAABJRU5ErkJggg==" alt="PsychedelicRock" ' + musicIconStyle + '/>PsychedelicRock</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Trance<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGgSURBVDjLY/j//z8DJZgsTV+9fAu+uHo8+GzvXECWAV+c3R//mTn9/ydLu4eka3ZyY/ts63T3k4Xt+4/GlqS74JONY+9Hc5tdH4wsmAmGgWv9xQKX2nMPnapOF4A1WzsEfjSzefLB0FwUHoi/szPX/05P/f0rOWk9ugHONWefzNl44X/B/L3/o7LXnn1h4fitN6i22Tx7W5tpxqYHxmnrChh+p6X+/rd10/+fsbF/f0REmiE0n7F3rDz5wb7s6Bu3gt3Vz80db69zTd1mlr11tUnGxt89Cw/8N0ha9YDhZ2LC+p8xMb9/hEdc+h4Ucu+br//JFXFNi5zKjz20KztiDzIMGFgzP+iZboQZbpSypsAgaeUjvfilqIEI9C9bf8rk3Wd8kz59sHV+BQysa8DA+vNe1+Trew0DfrwJCehfCceqU8fsy48ttS05xAkMLANgYP39N23K/3fq+n9wpkTXugsFQP8+B/r3DdC/pciS77WN1r9T0/v9Vkl7PU4DnKrPPJi85uJ/oH9fkpUXHCqOF9iVHn5gU7S/gG6ZiaoGAADG9LhB7Kzu8AAAAABJRU5ErkJggg==" alt="Trance" ' + musicIconStyle + '/>Trance</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Techno<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHMSURBVDjLxVNNSxtRFD0jEYqgBCMU00bEWFsqSNoi1EU2WiiluHEluuumfyH0B3RbuvQHCIpbaaFSxZULQYMUAklJCQZDjUTyMfl48z5675t0AgqCuPDC5dw3M+/c8+6Z5xhjcJfowx0j9L/IZrMfPc/7QtmhaLbb7Xqr1SpTppvN5jlhlTBHuZNKpeQ1AvrgK20EZSqZTK7dWkGj0einrt+JaPM2R3D28/KU8LGb2wMRIPz8LZTSkDYVPKkgPQVB6Hm8lhaFXxeZwDwM1QNGdoWN0Zza2LUi5JqfKa1tTfzYz1R6LkxGB1E8d/Hk0RAKf+t4FhtC/qyG6fEwcsUqEpPDyBQuMft0xD5jhUJIOHu/BSlooFh2LTO/4I6SuwRHMQEm4hG8nIpg97iEnydl9EnpS5p/MYo3r6J0Vo33r2PoCIWl5DjaQmNlIU5rjQ/vpuxmDibkeTjffrkm+qCFP6UapOTOva6swAuQlKmespmJCHbSJYTslKnr4twYNnbzWJ6fuNG2z+tpfFpNYPvg1DZytg4rJjYgoLpT11rbCQdoug5YF8gVdkr7+OPoDKGOkBcZ14xc8devu/+AVamUP2BKTdm9ghfOvd/Gf3hhfpp0UP3EAAAAAElFTkSuQmCC" alt="Techno" ' + musicIconStyle + '/>Techno</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Pop<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ0SURBVDjLfVJNaFNBEP5e8tLXkKqtSa0kVYKplFIsFNSTIgiFhoL04FnsQYTSW66BkIcezMlTD1LQS7wWjIdA6qEVKq1ixAqSWBqMFWJ/EtvUtMnb9+LM1kispAvD7s7M983Mt6vU63U01uiDhfrErT68+VqEJeowTUuaRSaEhWsBN6bj7/Fu+rbSwKhoWpZpwrLqEMYfoDjcTXFogkmF2QyBrfnyt5phQtRM+DQT1901GHQ2yCcJjyOwKPirYsB7QpOggY4aBtwqTioGzp1yYq9SpSLHdmDqb1d+wKOp6DvdBrejhq6uLgy5LZxxtWEpvc5F9JYEC4+CkU/ZTX3pYwEXnAbO9vSgs7MTbqWMpQ/fsJIp6J/jdyPNGIVfIZ1OO4UQ/WR2wzDw9PXP+6OD2r0rQxdlUqFQwPNXXxLDXhHleK1GuhjGZigUykuC5eXldYfD4eP5iEQat26z2VCtVqGqKjY2NrC1tcVAGd/d3UWxWLwjn5Gck/v7+3Gfz9fBLe/s7KBSqUjjAkzcQ+MEAgFomsYFkcvlXhBuVml8pFQq1UeOl16vt7+9vR3lclkCOc7GPsuykEwmTcqLRKPRh/+IODIyskqzXc5ms7Pcpt1ulwA2JqARGVyknGAD/N8rjI+P71FCant7WxKwBrwriiJJSI89XddTLZ+RFyWNeTwe2bLL5cLBwYEUlM+0nyflL7UkmJmZcVIHN3t7e5HP55FIJFbn5+efLS4uolQqwe/3s+BjLQkIfKO7u9tJs7LST+g+HIlEJjKZTDAej39nPY4SqEfa962treUIOBkOh5MNfywWS05NTQ3Ozc09pj9wtRnzGyK4jfbwxX10AAAAAElFTkSuQmCC" alt="Pop" ' + musicIconStyle + '/>Pop</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Dance<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKDSURBVDjLjdFNTNJxHAZw69CWHjp16O2AZB3S1ovOObaI8NBYuuZAhqjIQkzJoSIZBmSCpVuK/sE/WimU6N9SDM0R66IHbabie1hrg0MK3Zo5a8vwidgym8w8PKffvp89e35RAKJ2ipp7WDxvjltZ6jwCr5W2bpHHtqUnx+77877jsZxzlO3roAWXuw5ha1pl9MZdAW2ig8RyXyL8rnx8G6uH387AMnUMC2b6l10BJPdAfWDGhZVREuszT7D6hsTStBNDurO+XQEZnEypx1a28XW2F8HFPqwtOBAYJlCde9EeEZCy4sTN4ksrRA4LZB57vZCfMElUyH4E7Ap86r+LwIAGIy03cDr/lDNJGR/zDyBiHGc3i1ODjUIWtqbdIIexVY86kwZ3HijR/86GmqFqJGhPWs8oTkRvAgb+uZGHhVfRV3UNni41OhU8EDlstBSkwjKjhnmqAg3uUtS6y9Dzvg0ljmKkFCaRm4CJT+/5OERtG4yqZMEwdQt1biV0EyW4PVEE1dsiiMk8eMn0/w9Wp+PCNK1CQ6iBYeommkIpH5Qhy5AF/6Mrf4G955tUJlXxtsHieeWQ2LJxvVuAAkoASUcmLugZPqW0qsprEQjDx3sY3ZIMhXt1+DNw77kdmnYKSsKKx+PfoTQtYX9KtzWG2Rod6aujaJwWHk8+uDawGITeA+SPA7nDQOYgwKcAYhQQajyIY9eQEYE5feLPyV4jFC8CELkAkWMDQmoDPGsQaWYgzRjEU8vL8GARAV8T099bUwqBdgzS14D4VaiBA8gZALJ/t6j1Qqu4Hx4sIvChoyDFWZ1RmcyzORJLJsDSzoUyD5Z6FsxKN+iXn/mM5ZLwYJGAX0F/sgCQt3xBAAAAAElFTkSuQmCC" alt="Dance" ' + musicIconStyle + '/>Dance</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Top40<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKfSURBVDjLfZNLaNRXFIe/O//JTCePxqQiRq2CDcQkGFoQF0VaCS4MAVGoiEhDpEigi0JxXYKhthTaTRcuVOhCIgXBFCtVCLb1laoNKkl8tIyPSCoTY8aOJqP538evixiZUOKBw+Uezve7h3PONZKYs81fntPuLfX8MZonOOF9wPtA8AHnAhveeYsDvVcZPPCRmWOSlFjwnhCEsy9BN3t6N+vOCe98KUKi9PLqNetxsaex7BIdb36FjT3W+lnB1wkE55kuWpZVpbGxp7X8J9bV3mGpbvN2dYap4gzev7YC3/Pn8DiL00maa56yOjVEoraVTZVnWFKR4vK1MYLzPQsKnPumrXvk74mey0M51pf/RrJuO4lF79Oc6OfK9VGG/8r13Ort7C5ljCTsxVUZKWpQUBQEX1zs6OpqOb1nZcseSKSIH/zIkfPRzzuahvZJCUIQ3hYn6rY/emAkEZ+tG1N543IJJKEgEjUfQPkqZJ8gW8BODuGLjxCGYC3xs/vE+ccdRhLF42ZLsPRGTZ9WJpfvRHGOED8h2Dz4IsiBSWKSVQRnKQweJT84coI0u8zcIhWOmPrgOZlas60hWrEVxePITaNQRP45mAiXf0ju1DEfP6O75Xvtn9fE6o+VJc26F/f6+sLTmyAhzaAwA4oxRIz/eixvZ2ibg/83hZqdmjKZin5byCIDKGAwII9CgIiptd+qf8ExAog32stq3sWYJHKOOP8QU1ZLIlVNasnSlcP7zNrS/Hl/YbJvcSaI1mhRE4Ur3zE5MJDFcKGiob6zas1G0nXN5O/k2oHhBTbRfWgqV2cmTu5l4veBg87yXuPX2v3v7Wzb3eOH/4mfx7yYpn1+ydIrHzvEJ9n93B35nM2lcUlc+ozqM7v44Zdt3CiN/wel+5Gy/cSN+gAAAABJRU5ErkJggg==" alt="Top40" ' + musicIconStyle + '/>Top40</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Hardcore<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIMSURBVDjLpVNLaxNRFP6STmaKdFqrgYKWlGLSgoiKCwsKVnFRtBsVUSTNyj/gxv4Bl678AyKCoCulgmtd+W7romgzKT4QMW1G+5hMpnPnnuuZm6ZNawoVBw7n3pn5vvP4zkkopfA/j9F8cafO3FekCjGpIgKIvayftTXOkr71jkz2/UXA4HxXfz72gIx/lBsWSfiVtwiWHK8B3kRQeX/6lmnnkuDAwn0MJSKQEFChQCp9CcHixxgsGWw3B01uRKfx9t1HIP1POpoSdUulLyD0vqO26IAkDW7tgSZYeHPqcmpXxkTChKzOaAKSEdo6jnEWVY5ehFxdHs2cn55rScDR73H6DKyyRWs1R0haGdR+z8YZ3MyMTj9rpUKi/PLkUJuZfmX3nkNYmQBxzYprpyCA2XMRrvNAcdfDhgKkm6ttKTdW6jH4w4RpD/ALAaNzhH2kSwALoSJCd9+VhIqEVVeD4C1MclaOT0Ke0Cowq+X9eLHapLH23f1XreDzI27LfqT2HIfvzsRAyLB2N1coXV8vodUkfn16+HnnvrPDhrmXsxBY+fmOwcVlJh/IFebK207iuqSShg0rjer8B9TcWY7q38nmnRstm7g1gy9PDk2129mjinjy3OIvJjvI4PJ2u7CJgMEdUMmVuA9ShLez14rj/7RMDHzNAzTP/gCDvR2to968NSs9HBxqvu/E/gBCSoxk53STJQAAAABJRU5ErkJggg==" alt="Hardcore" ' + musicIconStyle + '/>Hardcore</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>HipHop<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ5SURBVDjLfZJtSFNRGMenRkgY1BKiL30yEkqJrCjrgxBB5Qtmyy3NcGoUuqD5skEm+ZZizpTUmZEw33ML06lzGoQKtRRETXM2Z1LOTBs6LNNw9/w7d+IiuevAj3vO4fx/z+E5lweAtxVRvp5Pqaf8psAF3RQfngtBa1OvCet2Bq5Ge/80K5nkCntR7AwhsP0imF8msCwRfF4k+GQlmFxgYF7YEKerDJzV90vKexwHZm0EX2hw6juBaZ6B8RuDsa8MRiwbggL1IP57A7b6NK36kYbH5xiM0vCwhRXYHYKMmnd/gwlH+dvunPTOehy623ZLlrfO9oCVbA72JsMzjEPK2QP5Gb5UGewJxcXtKBLsQ2JKBkR5OkfHq/QfnKKlH2uONd0f/ecVioM8OzXyC+hRRKFAeBC3A3dAfHwn7ob71tCD5rnFlc3gKiVjM+cUlEbsqZ4xqLE81IT3Lx6gXyXDUMsjpGQqRip1Y2zwJ0W6tWfOyZUQQepEYxpZHW8FTFqsGdvRX5dORLlaKw0mcP0vTsHekAYPXkDFE3VxNplU3cREXQrMdRKoCnOI+5Gycu9zlR4uBbvON7l5nNbkykunGL0VkGvfQqo2QFJtwLNhIDHfZHc/UZvpFVThxik4FfEwNS2nDc+NBMkDwI0+4LoeiNQAV+sJcrsIxMnNJDD0noxTMFt4CAPqUiSp5xHbAcRoCIQ1BBFVBGFPAYFiAYPNSkxl+4JTYFYGv6mVxyBU2oe4LiC+GxDrKPR7rQU4G9eBl/ejMVEW1sspMDUk8V+VxPsHRDZkHbjcZvGL7lrxj+pe8xN2rviEa63HLlUVvS6JPWxqlPC5BH8A3ojcdBpMJSoAAAAASUVORK5CYII=" alt="Hip-Hop" ' + musicIconStyle + '/>Hip-Hop</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Ambient<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGeSURBVDjLxdO9SwJhHAdwIdpqrKmxNZqKuEUhSIyixCI0yjPv1PM1z8KDEonrOPF8OzcVhYoCh2gXp/wzcnmGgiDX1m+PQsZR9EJEw5fnWX6f5/e8mQCYfhPTnwHZbMapKPL9jwFNy47QYllVlWdZPsGXQKGQZwqF3CC5nMbQ4rt6vYabm2uk08fvAOLfHzcA+byGclmHrhdRKhVxcXGGZrOJ8/MzSMlDA0B8MZ7sBqYMgKZl0Oncot1uo9VqodFoQJZlCuoQ49EhQLgo98SHQDZYiaw4J4YA3Suuri6hqioURUEqlYIoinR+ikhEGACP664ucfGLj04PyPKWoStT/6BqtQp4nofb7YbD4YDNZoMg+Gl8r0CP2HcW6QhiWTMCR0cSqtUKJCmJWCwKu30dZrOZYjvw+71vW7BuCr3VTZB5q0hmLWND4OAgjkQiRotDg5bDYWGAeDxu2pXHeIhzS0EyY540dBDfDzOhYIAJBDjG59tjeJ7t9qFkUgTHse+vcXph9NOHRFcd4bysQvP8EfDtp0yhbZqH//tM380L5ZG0STFOrDMAAAAASUVORK5CYII=" alt="Ambient" ' + musicIconStyle + '/>Ambient</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Psychedelic<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIhSURBVDjLjZPfS1NxGMbPjX9Bl/0PXqQzIYIEWWIpRFFBQwyNQqhG4VY0dUK0gXQh+KMhu2nKIAkpAu0wkBA0f0QRtoLuFgSbOmSbZ+estsf3+e6ssE7hxXNz4PM+7/d9nqMB0A6jr3Var2hJlBFZorKochhwUpQmkO65iC3/DWwP3sJO0Av59l/QI0qlmuux5buO7EMvcuM+5AInsRdqxo/5ART92j/hqMhIX7uMbOgudu+7YYRdsMaPozRZ1c/EIKwHmiM8KyptD9xEbsyHQvAYSjZozZyC+boDxbeXYKUmkF9vcHQu7QzdRn7KD/OxqwrGW1B8cx7GZheML1eVrO8R5N+5/nqzQWfC1miTgs1X7TA+eBT0bdOD5yudCCRaMPF+CEej2oEBKb6Za9ecTb0TRrIbewLPLnegd/4E2l824vSLBoQ3AjgypR2IqpJ9dAeF4cbfzgJnPnVhZLEVZ23wSsyHvkgcMf0jzvTP/RqQZlSF6D11ML6Za9OZcJuA555dQN+TOKb1JGb0z3i6kKwOsBtWZs6Miu7qYPbadCYcjCUUGJ5eQ09IJ2yKVjlgiQ1jSZgzo+K1eTC+mWvTmbB3dLEGumu344AM68mGqbdLznTntXkwvplr05nwn73hAIvdZj3V+lISDmBUyj1SdbfXdjsNKPPHYLdVPaVhLAlzZlS8tn0w06n2HFDhX8Ufg91mPdkwloQ589K2Vp0G7AOR2a7+EgKeFAAAAABJRU5ErkJggg==" alt="Psychedelic" ' + musicIconStyle + '/>Psychedelic</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Rock<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAABGdBTUEAANf7bzMYAQAAACBjSFJNAABuJwAAc68AAPexAACJHQAAacwAAOD9AAAxJwAAF+lW189LAAACc0lEQVR42pSSXUiTcRjFj9t8t9roXSa+5nDNwoK6sNoQhFJ4Z6UWu8iBdGF3QUUfCuGVUiAEfSB1FXQZlWIXsdaHN5LCSBhOkdJotnR+zOU2XNr7d3Pb/+lmmYUf9Ls/5zzP4eRgEwRBQE1tHQRBC845AEIikYR//MuhE8dtzRedR0KazQw45zBoCfl5WmQ4B3HCj4XFqw9uXrpeqI3sSykLUG9lUJCbRJFuBQ+fvMFpx1ksTQ++2pufLo5+D7bMzkydzMEWHDbnYzgYAQC0NJzyCdugspjSbYNj4defp5aw0QsqURSr4vH4+6OWAgBAa2PdJ0GDnD7vaOX4XCw2H08AwPoGNpvt6Q5jXjWAgqHJebQ21vp5Js37fWOVH/yh2BodV/0rNhgMZ0pLS88N+oYeAUDb+ZrJlZWE+q1nWB7wh+YBCAByf5usdkBEAICysrJR2V59UKDk3GLAp9HlahRX/3DVREyZAmDIalIA0gAyAACdTmc1m80d5eXlc01NTcQYo3edj6nh2P6vRq26MJtRCGAXAB2AP5cbjcYLVqs1Kcsy9fb2EmOMPB4PMcbo2pXLAx3371FJScktANK6nZlMppDFYiGHw0HhcJjcbjcxxmhk5CP9VBTq7u6miooK91+paxFFMSRJEjmdTurp6SHGGLlcLgoEAlRfXx+QJOkOgCIA2vX06lQ6fYCIrInlZaRSKXi9XtjtdrS3t2e6urpuKIryIlucslra2sFwzu9moA4GJoLofP4MnHNEIhFEo9EZAH0AZgFMA0huOFeVWmMXpeJvO3fvIQAkyzLp9fpW/Ccl28W824JefAmgOTuYLfk1AHRjE5Q7u6GRAAAAAElFTkSuQmCC" alt="Rock" ' + musicIconStyle + '/>Rock</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Reggae<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAkNQTFRFAAAAz7UIybYRRoIsMHkxNnswNnwxN3wyN3wzMXkxQ4Atx7UR0LUI1rYAg3MAAhwBAjoAB08AAEcAAEoAAEsAAjsAABoBgXEA1bQA0b8/+eZlws5vgbN8ebB+hraAh7eDh7eEgLJ8wM1v+OZm08A/REM6//NfRkU6KioteHRQ4c5P/+1Pu8lccKtraaltb6truchc49BOenZQKisuKiopPD1FKysqISEhOjo4Ojo3IyMjGhoaLSwqLS0qHBwcFRUUExQeGBgWDA0QQDwUx60T9NUSmqkiPoU1M4E3PYQ1l6gj89QSya8SRT8UDQ0SGhgM6MkH68wIHx0NhXcQlJkaPXk0OHpATYNFUYdNU4hQVIhQToRGOHk/OXUxj5Uak4MSRz8RHB4cAAUyGyMpOTUhIyoiISkgHykfHykeICkfISohNTIeGSAkAAMxGRocPzkRW1EOYVgTL0cgJEUlKUcmKUcnKkgoKUgnKEYlIkIjLEQfXVMOsKVg7eZknMB0dbJ8fbZ6gLd6mr906+VksqhgRUZORUZPR0dESEhGp5pF/+hD5txJh7FbhbFc5NtJqp1FSUlGR0dFNjY2Nzc4Li84Wlc41b838dk48Nk418E3XFk4KSkpKioqHiAqS0kry7Up6dAq6NAqzbYpTksrKSkqICAdHyAfin0e9dUc1cgiaZk3Z5g408cj9tUcjYAeISEfISEeBQcUBwgVcWQKzMEQXpEoLoA4PIc5QYk6PYc5L4E5XZApysARd2oKv6gRwqsR////AsD/JgAAAHx0Uk5TAAEBAQEBAQEBAQEBAQkSEBERERERERASCYP87O7u7u7u7uz8g438jYz7/v7+/v7+/v77jIz8jIz8/IyM/PyMjPyMjPv+/v7+/v7+/v77jIz8/IyG8fT09PT09PT09PGGEB8dHh4eHh4eHh4eHh0fEAECAgICAgICAgICAfl/JP0AAAABYktHRMATYd/4AAAACXBIWXMAAABIAAAASABGyWs+AAAA/klEQVQY02NgZGJmYWVj5+BgZ2Pl5OLmYcAAvHz8AoJCwiIiwkKComLiEgySUtIysnLyCgrycrKKSsoqDKo1arV19Q2NjQ31Tc1qLeoMGq2aWto6unp6+gbahkZtxgwm7aYdnV3dPb19Xf0TTCeaMZhPspg8Zeq06TNmzpoy2XKyFYP1bJs5c+fNX7Bw0eK5S2zn2DHYL3VYtnzFylWr16xdt95hgyOD00ZnF1c3dw8PTy9vH99Nfgz+mwO2bN22fceOnbt27wncG8QQvC8kNCw8IjIqIjomNm5/PENCYlJySmpaekZmVnZObl4+pucKCouKS0rLgKC8orKqsBoAXdNRm5fZf90AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDEtMTdUMDk6MTc6MTMtMDU6MDAkT9wcAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTAxLTE3VDA5OjE3OjEzLTA1OjAwVRJkoAAAAABJRU5ErkJggg==" alt="Reggae" ' + musicIconStyle + '/>Reggae</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Disco<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAwFBMVEUAAABEREBEREBEREAAAAAYGBdEREAYGBcKCglEREAAAAABAQEFBQQsLCkEBAQAAAAAAAAAAABEREA/PzwGBgYFBQQBAQEAAAAAAAAAAAAAAABEREBEREAtLSsBAQEAAAAAAAAAAAAAAABEREAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAFBQUAAAAAAAAAAAAAAAAHBwcMDAwAAAAAAAAAAAAGBgYEBAQBAQEBAQAAAAAZGRcAAAAAAAAAAAAEBATyYZhDAAAAPXRSTlMAAQQFAQMJHDwBA1XAGMlFU8YCDqy/nON37S4NDxTCwo32SAoS/IvybuhiFa4QMoP4e0mT+v6Tz43kVAXfT8B9NwAAAJ5JREFUGBkFwQVCQzEUALC0HwrFKc4rOoYNdx33vxUJAABAykNOAMzMlrn5agEJLC4tr/yurq1TM7SNza3tnd29fa0MqNEPDo+OT061GGVS6dHOxtNzLXpJ5FE0LqaXLXpUDKXhanodPRrkisn496ZHA4nbu/uHx7+nBuD55fWtv38AoEWPzy9IoEWP758JaoZaRqWCWgakPOQEUh7yPzRBDOULewkfAAAAAElFTkSuQmCC" alt="Disco" ' + musicIconStyle + '/>Disco</a>');
        spanArray[s].innerHTML = spanArray[s].innerHTML.replace(/>Jazz<\/a>/g, '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAMAAAD6fQULAAABI1BMVEUAAABQUHBQUG9PT29PT3BQUG9OTnVRUXBQUG5OTnJPT29EREBEREBEREA/P39PT3BPT3BFRVxEREBEREBEREBEREBPT2tISFxEREBPT25PT2pJSV1PT29PT25PT3B/f39OTmtEREBOTmtPT29QUG9RUXBUVHFEREBOTmpPT21PT3FRUW5QUG1QUG87OzhEREBPT29QUHBPT29QUHBRUXNMTGhPT2xEREBOTm9PT3BOTm9QUHBOTmZAQDxPT21QUG9QUG1JSVNNTWpPT2xPT29QUHBPT25OTmdQUG5PT3FRUXBPT2lNTWNPT3BmZmZLS2FPT2pOTmg/PzxMTGZPT3BRUXBPT25PT3AkJCJOTmtPT2lPT29CQltPT29OTnBOTnBQUG4ELebQAAAAYXRSTlMAnJWQkYINS5sxIAEEBQSahRMKCQECfyINkYAgbpRkApYPhD6SQgkBl5VzNSOZCAeXn0fMFldbCJmtXqI9EJWuTRN6uWGoSFWNajltRo0FDIh1DgqGWWM9AphAQAl1lpZso3FqAwAAALFJREFUCB0FwTFLAmEAgOH37cBLjkSFEGlxEZfAtm5ql0CaRPD/CUKbi04Orq4NicstCSqRhqjJx/U8quofABh7LXguap4fEUruy6o7EIiqatgCAvX8RtUM4T5RXTU3NaW1L/9UrgU/HlXah/z4oJo1lOfMderlVlXaX98hjX9LqtL6jEJ6p8vT00QgCh11EdKxQPSqOn/xXSDuzounsO05Eujr1N3gMEZIfNPhwFmW/APywzUprxZCtQAAAABJRU5ErkJggg==" alt="Jazz" ' + musicIconStyle + '/>Jazz</a>');
        // 3: END
        
        // 4: Make NUKKED torrents red
        var nukeArray = spanArray[s].getElementsByClassName('browsenuke');
        
        for(var n = 0; n < nukeArray.length; n++)
        {
            // As the word "UnNuked" contains the word "Nuked" we have to check which one it is.
            if(nukeArray[n].innerHTML.indexOf("UnNuked") == -1)
            {
                var element = nukeArray[n].parentNode.parentNode;
                
                element.style["background-color"] = "#FF3333";
                element.style["color"] = "#FFFFFF";
            }
        }
        // 4: END
    }
    // 2: END

    // 5: Format the names of TV shows
    var torrentArray = container.getElementsByClassName('torrent');

    for(var t = 0; t < torrentArray.length; t++)
    {
        // Check if torrent is TV/HD
        if(torrentArray[t].getElementsByClassName('cats_tvhd').length == 1)
        {
            var torrentName = torrentArray[t].getElementsByClassName('torrent_name_link')[0];

            // SHOW.NAME.S01E01.VIDEO_QUALITY.VIDEO_SOURCE.AUDIO_CODEC.VIDEO_CODEC-GROUP
            var match = torrentName.innerHTML.match(/(.*)\.S(\d\d)E(\d\d).*(720p|1080i|1080p)\.(HDTV|WEB-DL|WEBRiP|WEBRip).*(H.264|x264)-(.*)/);
            if (match !== null) 
            {
                var detailName = match[1].replace(/\./g, " ");
                var detailSeason = match[2];
                var detailEpisode = match[3];
                var detailQuality = match[4];
                var detailSource = match[5];
                var detailCodec = match[6];
                var detailGroup = match[7];

                torrentName.innerHTML = "" + detailName + " - <b>S</b>" + detailSeason + " <b>E</b>" + detailEpisode + " (" + detailQuality + "/" + detailSource + ") <font color=\"grey\"><em>" + detailGroup + "</em></font>";
            }

            // SHOW.NAME.2015.01.01.VIDEO_QUALITY.VIDEO_SOURCE.AUDIO_CODEC.VIDEO_CODEC-GROUP
            var match = torrentName.innerHTML.match(/(.*)\.(\d\d\d\d)\.(\d\d)\.(\d\d).*(720p|1080i|1080p)\.(HDTV|WEB-DL|WEBRiP|WEBRip).*(H.264|x264)-(.*)/);
            if (match !== null) 
            {
                var detailName = match[1].replace(/\./g, " ");
                var detailDateYear = match[2];
                var detailDateMonth = match[3];
                var detailDateDay = match[4];
                var detailQuality = match[5];
                var detailSource = match[6];
                var detailCodec = match[7];
                var detailGroup = match[8];

                torrentName.innerHTML = "" + detailName + " - <b>Y</b>" + detailDateYear + " <b>D</b>" + detailDateDay + " <b>M</b>" + detailDateMonth + "</span> (" + detailQuality + "/" + detailSource + ") <font color=\"grey\"><em>" + detailGroup + "</em></font>";
            }
        }

        // Check if torrent is TV/SD
        if(torrentArray[t].getElementsByClassName('cats_tvsd').length == 1)
        {
            var torrentName = torrentArray[t].getElementsByClassName('torrent_name_link')[0];

            // SHOW.NAME.S01E01.VIDEO_SOURCE.AUDIO_CODEC.VIDEO_CODEC-GROUP
            var match = torrentName.innerHTML.match(/(.*)\.S(\d\d)E(\d\d)\.(HDTV|WEB-DL|WEBRiP|WEBRip).*(H.264|x264)-(.*)/);
            if (match !== null) 
            {
                var detailName = match[1].replace(/\./g, " ");
                var detailSeason = match[2];
                var detailEpisode = match[3];
                var detailSource = match[4];
                var detailCodec = match[5];
                var detailGroup = match[6];

                torrentName.innerHTML = "" + detailName + " - <b>S</b>" + detailSeason + " <b>E</b>" + detailEpisode + " (" + detailSource + ") <font color=\"grey\"><em>" + detailGroup + "</em></font>";
            }

            // SHOW.NAME.2015.01.01.VIDEO_SOURCE.AUDIO_CODEC.VIDEO_CODEC-GROUP
            var match = torrentName.innerHTML.match(/(.*)\.(\d\d\d\d)\.(\d\d)\.(\d\d)\.(HDTV|WEB-DL|WEBRiP|WEBRip).*(H.264|x264)-(.*)/);
            if (match !== null) 
            {
                var detailName = match[1].replace(/\./g, " ");
                var detailDateYear = match[2];
                var detailDateMonth = match[3];
                var detailDateDay = match[4];
                var detailSource = match[5];
                var detailCodec = match[6];
                var detailGroup = match[7];

                torrentName.innerHTML = "" + detailName + " - <b>Y</b>" + detailDateYear + " <b>D</b>" + detailDateDay + " <b>M</b>" + detailDateMonth + "</span> (" + detailSource + ") <font color=\"grey\"><em>" + detailGroup + "</em></font>";
            }
        }
    }
    // 5: END
})();
