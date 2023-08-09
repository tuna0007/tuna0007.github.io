new AirDatepicker('#inputIn', { 
    inline: false,
    position: 'bottom center',
    toggleSelected: true,
    keyboardNav: true,
    autoClose: true,
    navTitles: {
        days: '<strong>MMMM</strong>',
        months: '<strong>yyyy</strong>'    
    },
    dateFormat: 'yyyy-MM-dd'
    
});

new AirDatepicker('#inputOut', { 
    inline: false,
    position: 'bottom center',
    toggleSelected: true,
    keyboardNav: true,
    autoClose: true,
    navTitles: {
        days: '<strong>MMMM</strong>',
        months: '<strong>yyyy</strong>'
    },
    dateFormat: 'yyyy-MM-dd'
});