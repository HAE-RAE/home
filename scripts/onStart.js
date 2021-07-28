// TODO: add back RS after RS has been fitted to the new synthetic datasets

starts_checked = [
    "RMI",
    "RS",
    "BinarySearch",
    "BTree",
    "FAST",
    "PGM",
    "ART",
    "ALEX",
]

readOnly = [
    "RMI",
    "RS",
    "FAST",
    "FST",
    "RBS"
]

starts_plotted = [
    "RMI",
    "BTree",
    "ALEX",
    "RS"
]

learned_indexes = [
    "RMI",
    "RS",
    "ALEX",
    "PGM"
]

for (const indexName of starts_checked) {
    document.getElementById(indexName).checked = true;
}

$(document).ready(function() {
    $('.tables').each( function() {
        $(this).find('tbody > tr').each (function() {
            var trow = $(this);
            if (trow.index() >= 0) {
                const nameCell = trow.find("td:first")
                const indexValue = nameCell.text().trim();
                if (starts_plotted.includes(indexValue)) {
                    trow.prepend($(`<td>Plot: <button class="button_${indexValue}" onclick="toggleIndex('${indexValue}')">Remove</button>`));
                } else {
                    trow.prepend($(`<td>Plot: <button class="button_${indexValue}" onclick="toggleIndex('${indexValue}')">Add</button>`));
                }
            }
            const td = trow.find('td:nth-child(2)');
            if (learned_indexes.includes(td.text.trim())) {
                td.css("background-color", "#ff80f4");
            } else {
                td.css("background-color", "#89ebfa");
            }
        });
    });
    jQuery('input[type="checkbox"][name="filter"]').on('change', filter_magic);
    $("#dataswitch").on('change', filter_magic);
    $('.tables td:nth-child(8), th:nth-child(8)').hide();
    filter_magic();
    $clicks = $(".startClick");
    $clicks.each( function() {
        $(this).click();
        sortfwdind = document.createElement('span');
        sortfwdind.id = "sorttable_sortfwdind";
        sortfwdind.innerHTML = stIsIE ? '&nbsp<font face="webdings">6</font>' : '&nbsp;&#x25BC;';
        $(this).appendChild(sortfwdind);
    })
});
