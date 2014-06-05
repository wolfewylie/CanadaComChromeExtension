walk(document.body);

function walk(node)
{
        // I stole this function from here:
        // http://is.gd/mwZp7E
        
        var child, next;

        switch ( node.nodeType )
        {
                case 1: // Element
                case 9: // Document
                case 11: // Document fragment
                        child = node.firstChild;
                        while ( child )
                        {
                                next = child.nextSibling;
                                walk(child);
                                child = next;
                        }
                        break;

                case 3: // Text node
                        handleText(node);
                        break;
        }
}

function handleText(textNode)
{
        var v = textNode.nodeValue;

        v = v.replace(/\bcolor\b/g, "colour");
        v = v.replace(/\bColor\b/g, "Colour");
        v = v.replace(/\btheater\b/g, "theatre");
        v = v.replace(/\bTheater\b/g, "Theatre");
        v = v.replace(/\bbehavior\b/g, "behaviour");
        v = v.replace(/\bBehavior\b/g, "Behaviour");
        v = v.replace(/\bbehavior\b/g, "behaviour");
        v = v.replace(/\bcanceled\b/g, "cancelled");
        v = v.replace(/\bCanceled\b/g, "Cancelled");
        v = v.replace(/\b, right?\b/g, ", eh?");
        v = v.replace(/\bdialog\b/g, "dialogue");
        v = v.replace(/\bDialog\b/g, "Dialogue");
        v = v.replace(/\bgrey\b/g, "gray");
        v = v.replace(/\bGrey\b/g, "Gray");
        v = v.replace(/\bflavor\b/g, "flavour");
        v = v.replace(/\bflavors\b/g, "flavours");
        v = v.replace(/\bFlavor\b/g, "Flavour");
        v = v.replace(/\bFlavors\b/g, "Flavours");
        v = v.replace(/\bhonor\b/g, "honour");
        v = v.replace(/\bHonor\b/g, "Honour");
        v = v.replace(/\bhumor\b/g, "humour");
        v = v.replace(/\bHumor\b/g, "Humour");
        v = v.replace(/\blabor\b/g, "labour");
        v = v.replace(/\bLabor\b/g, "Labour");
        v = v.replace(/\bmeter\b/g, "metre");
        v = v.replace(/\bMeter\b/g, "Metre");
        v = v.replace(/\bgage\b/g, "gauge");
        v = v.replace(/\bGage\b/g, "Gauge");
        v = v.replace(/\bGages\b/g, "Gauges");
        v = v.replace(/\bgages\b/g, "gauges");
        v = v.replace(/\bmustache\b/g, "moustache");
        v = v.replace(/\bMustache\b/g, "Moustache");
        v = v.replace(/\bneighbor\b/g, "neighbour");
        v = v.replace(/\bNeighbor\b/g, "Neighbour");
        v = v.replace(/\bneighbors\b/g, "neighbours");
        v = v.replace(/\bNeighbours\b/g, "Neighbours");
        v = v.replace(/\brumor\b/g, "rumour");
        v = v.replace(/\brumors\b/g, "rumours");
        v = v.replace(/\bRumors\b/g, "Rumours");
        v = v.replace(/\bRumor\b/g, "Rumour");
        v = v.replace(/\bcouch\b/g, "chesterfield");
        v = v.replace(/\bdollar coin\b/g, "loonie");
        v = v.replace(/\bdollar coins\b/g, "loonies");
        v = v.replace(/\bDollar coin\b/g, "Loonie");
        v = v.replace(/\bDollar coins\b/g, "Loonies");
        v = v.replace(/\bfavor\b/g, "favour");
        v = v.replace(/\bFavor\b/g, "Favour");
        v = v.replace(/\bfavors\b/g, "favours");
        v = v.replace(/\bFavors\b/g, "Favours");
        v = v.replace(/\bCanadian\b/g, "Canuck");
        v = v.replace(/\bCanadians\b/g, "Canucks");
        v = v.replace(/\bsoda pop\b/g, "soft drink");
        v = v.replace(/\bSoda pop\b/g, "Soft drink");
        v = v.replace(/\bdonut holes\b/g, "timbits");
        v = v.replace(/\bdoughnut holes\b/g, "timbits");
        v = v.replace(/\btoilet\b/g, "washroom");
        v = v.replace(/\btoilets\b/g, "washrooms");
        v = v.replace(/\bToilet\b/g, "Washroom");
        v = v.replace(/\bToilets\b/g, "Washrooms");
        v = v.replace(/\bCanadian Tire\b/g, "Crappy Tire");
        v = v.replace(/\bFucking\b/g, "Flippin'");
        v = v.replace(/\bfucking\b/g, "flippin'");
        v = v.replace(/\bCanceled\b/g, "Cancelled");
        v = v.replace(/\bBigfoot\b/g, "Sasquatch");
        v = v.replace(/\bbigfoot\b/g, "sasquatch");
        v = v.replace(/\bCanadian bacon\b/g, "back bacon");
        v = v.replace(/\bzee\b/g, "zed");
        v = v.replace(/\bzip code\b/g, "postal code");
        v = v.replace(/\bnapkin\b/g, "serviette");
        v = v.replace(/\bnapkins\b/g, "serviettes");
        v = v.replace(/\bbackpack\b/g, "knapsack");
        v = v.replace(/\bcommotion\b/g, "kerfuffle");
        v = v.replace(/\bvalor\b/g, "valour");
        v = v.replace(/\bValor\b/g, "Valour");
        v = v.replace(/\btraveler\b/g, "traveller");
        v = v.replace(/\bTraveler\b/g, "Traveller");
        v = v.replace(/\bTravelers\b/g, "Travellers");
        v = v.replace(/\btravelers\b/g, "travellers");
        v = v.replace(/\bodor\b/g, "odour");
        v = v.replace(/\bodors\b/g, "odours");
        v = v.replace(/\bOdor\b/g, "Odour");
        v = v.replace(/\bOdors\b/g, "Odours");
        v = v.replace(/\btumor\b/g, "tumour");
        v = v.replace(/\btumors\b/g, "tumours");
        v = v.replace(/\bTumor\b/g, "Tumour");
        v = v.replace(/\bTumors\b/g, "Tumours");
        v = v.replace(/\bmedalist\b/g, "medallist");
        v = v.replace(/\bmedalists\b/g, "medallists");
        v = v.replace(/\bMedalist\b/g, "Medallist");
        v = v.replace(/\bMedalists\b/g, "Medallists");
        v = v.replace(/\bHarbor\b/g, "Harbour");
        v = v.replace(/\bharbor\b/g, "harbour");
        v = v.replace(/\bharbors\b/g, "harbours");
        v = v.replace(/\bHarbors\b/g, "Harbours");
        v = v.replace(/\bsled\b/g, "toboggan");
        v = v.replace(/\bSled\b/g, "Toboggan");
        v = v.replace(/\bsledding\b/g, "tobogganing");
        v = v.replace(/\bSledding\b/g, "Tobogganing");
        v = v.replace(/\bsleds\b/g, "toboggans");
        v = v.replace(/\bSleds\b/g, "Toboggans");
        v = v.replace(/\bvacation\b/g, "holiday");
        v = v.replace(/\bvacations\b/g, "holidays");
        v = v.replace(/\bVacation\b/g, "Holiday");
        v = v.replace(/\bVacations\b/g, "Holidays");







        
        textNode.nodeValue = v;
}

