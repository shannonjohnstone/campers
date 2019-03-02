[
  {
    'repeat(100)': {
      id: '{{objectId()}}',
      img: 'https://source.unsplash.com/random/32x32',
      username: '{{firstName()}} {{surname()}}',
      avatar(tags) {
        const index = tags.integer(1, 1000);
        const colors = tags.integer(1, 10);
        var num = tags.integer(1, 10);
        var theme = num < 3 ? "bythepool" : num < 6 ? "heatwave" : "duskfalling";
        const avatar = `https://www.tinygraphs.com/squares/${index}?theme=${theme}&numcolors=${colors}&size=32&fmt=svg`;
        return avatar;
      },
      monthly_total: '{{integer(2, 100)}}',
      total: '{{integer(100, 10000)}}'
    }
  }
]
