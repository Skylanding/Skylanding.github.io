// // 让脚本在每次页面加载/切换后执行（Material hook）
// document$.subscribe(() => {
//   const el = document.getElementById('visit-map');
//   if (!el) return;
//   if (!window.L) { console.warn('Leaflet not loaded'); return; }
//   if (el.dataset.mapInitialized) return;   // 防止重复初始化
//   el.dataset.mapInitialized = '1';

//   const map = L.map(el).setView([20, 0], 2);
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; OpenStreetMap'
//   }).addTo(map);

//   const sample = [
//     { lat: 51.5074, lng: -0.1278, city: 'London', ts: '2025-11-03' },
//     { lat: 39.9042, lng: 116.4074, city: 'Beijing', ts: '2025-10-30' },
//     { lat: 37.7749, lng: -122.4194, city: 'San Francisco', ts: '2025-10-20' }
//   ];

//   function draw(points){
//     points.forEach(v => {
//       L.circleMarker([v.lat, v.lng], { radius: 5 }).addTo(map)
//         .bindPopup((v.city || 'Unknown') + (v.ts ? (' · ' + v.ts) : ''));
//     });
//   }

//   (async () => {
//     const tryPaths = ['../visits.json', 'visits.json', '../../visits.json'];
//     for (const p of tryPaths) {
//       try {
//         const r = await fetch(p, { cache: 'no-store' });
//         if (r.ok) { const data = await r.json(); draw(data); return; }
//       } catch(e) {}
//     }
//     draw(sample);
//   })();
// });
<script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=GJ-YeVhSXGG7UloYgc5FBWrsxNV1Nq0n-gAWy_7wmvU&cl=ffffff&w=a"></script>