const plans = [
  { name: 'Plan A', id: '43274268472368472' },
  { name: 'Plan B', id: '47237847238472343' },
  { name: 'Plan C', id: '31231231231212315' },
];

exports.show = (req, res) => {
  res.status(200).json(plans);
};