export default function GetyProfileData(req, res) {
  const profileActionData = [
    {
      image:
        'https://images.unsplash.com/photo-1510125964506-dc5a14f3ef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmljZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
      text: 'View reported items',
      link: '#',
      desc: 'Brwse through the list of reported items so as to be on the look out!',
    },
    {
      image:
        'https://images.unsplash.com/photo-1601972599748-19fe5a7e756f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmluZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
      text: 'Report a found item',
      link: '/profile/report-found',
      desc: 'Found a misplaced asset belonging to someone? Report the item as found here!',
    },
    {
      image:
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBob25lfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      text: 'Report a lost item',
      link: '#',
      desc: 'Report your lost or stolen items here. be sure to provide all neccesary details.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VhcmNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      text: 'Search for an item',
      link: '#',
      desc: 'Search to confirm an item has not been reported stolen or lost by another user',
    },
  ];

  res.status(200).json({ actionSection: profileActionData });
}
