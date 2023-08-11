let dpMin, dpMax;

dpMin = new AirDatepicker('#inputIn', { 
    onSelect({date}) {
        dpMax.update({
            minDate: date
        })
    },
    inline: false,
    position: 'bottom center',
    toggleSelected: true,
    keyboardNav: true,
    autoClose: true,
    navTitles: {
        days: '<strong>MMMM</strong>',
        months: '<strong>yyyy</strong>'    
    },
    dateFormat: 'yyyy-MM-dd',
    
});

dpMax = new AirDatepicker('#inputOut', { 
    onSelect({date}) {
        dpMin.update({
            maxDate: date
        })
    },
    inline: false,
    position: 'bottom center',
    toggleSelected: true,
    keyboardNav: true,
    autoClose: true,
    navTitles: {
        days: '<strong>MMMM</strong>',
        months: '<strong>yyyy</strong>'
    },
    dateFormat: 'yyyy-MM-dd',
    
});


