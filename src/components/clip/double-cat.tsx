export default function DoubleCat() {
  return (
    <>
      <style>
        {`
				.clip-container {
					width: 445px;
					height: 221px;
					display: flex;
					gap: 3px;
				}
				.clip-container .cat-wrapper {
					width: 221px;
					height: 221px;
					display: flex;
				}
        .clip-container .cat-wrapper .move {
					display: flex;
					flex-direction: column;
					gap: 3px;
				}
				.clip-container .cat-wrapper .move .line {
					display: flex;
					gap: 3px;
				}
				.clip-container .cat-wrapper .move .line span {
					width: 11px;
					height: 11px;
					border-radius: 2px;
				}
				.clip-container .cat-wrapper .move .line span:hover {
					opacity: 0.2;
				}
				.move-1, .move-2, .move-3, .move-4, .move-5 {
					width: 0;
				}
				.cat-1 .move-1 {
					animation: move-1 0.6s infinite;
				}
				.cat-2 .move-1 {
					animation: move-2 0.6s infinite;
				}
				.cat-1 .move-2 {
					animation: move-2 0.6s infinite;
				}
				.cat-2 .move-2 {
					animation: move-3 0.6s infinite;
				}
				.cat-1 .move-3 {
					animation: move-3 0.6s infinite;
				}
				.cat-2 .move-3 {
					animation: move-4 0.6s infinite;
				}
				.cat-1 .move-4 {
					animation: move-4 0.6s infinite;
				}
				.cat-2 .move-4 {
					animation: move-5 0.6s infinite;
				}
				.cat-1 .move-5 {
					animation: move-5 0.6s infinite;
				}
				.cat-2 .move-5 {
					animation: move-1 0.6s infinite;
				}
				@keyframes move-1 {
					0%, 20% {
						width: 480px;
					}
					20.01%, 100% {
						width: 0;
					}
				}
				@keyframes move-2 {
					0%, 20%, 40.01%, 100% {
						width: 0;
					}
					20.01%, 40% {
						width: 480px;
					}
				}
				@keyframes move-3 {
					0%, 40%, 60.01%, 100% {
						width: 0;
					}
					40.01%, 60% {
						width: 480px;
					}
				}
				@keyframes move-4 {
					0%, 60%, 80.01%, 100% {
						width: 0;
					}
					60.01%, 80% {
						width: 480px;
					}
				}
				@keyframes move-5 {
					0%, 80% {
						width: 0;
					}
					80.01%, 100% {
						width: 480px;
					}
				}
				.move-1 .line-3 span:nth-child(6),
				.move-1 .line-3 span:nth-child(10), 
				.move-1 .line-4 span:nth-child(5),
				.move-1 .line-4 span:nth-child(6),
				.move-1 .line-4 span:nth-child(7),
				.move-1 .line-4 span:nth-child(8),
				.move-1 .line-4 span:nth-child(9),
				.move-1 .line-4 span:nth-child(10),
				.move-1 .line-4 span:nth-child(11),
				.move-1 .line-5 span:nth-child(4),
				.move-1 .line-5 span:nth-child(5),
				.move-1 .line-5 span:nth-child(6),
				.move-1 .line-5 span:nth-child(7),
				.move-1 .line-5 span:nth-child(8),
				.move-1 .line-5 span:nth-child(9),
				.move-1 .line-5 span:nth-child(10),
				.move-1 .line-5 span:nth-child(11),
				.move-1 .line-5 span:nth-child(12),
				.move-1 .line-5 span:nth-child(14),
				.move-1 .line-6 span:nth-child(1),
				.move-1 .line-6 span:nth-child(3),
				.move-1 .line-6 span:nth-child(4),
				.move-1 .line-6 span:nth-child(11),
				.move-1 .line-6 span:nth-child(12),
				.move-1 .line-6 span:nth-child(13),
				.move-1 .line-7 span:nth-child(2),
				.move-1 .line-7 span:nth-child(3),
				.move-1 .line-7 span:nth-child(12),
				.move-1 .line-8 span:nth-child(3),
				.move-1 .line-8 span:nth-child(12),
				.move-1 .line-8 span:nth-child(13),
				.move-1 .line-9 span:nth-child(2),
				.move-1 .line-9 span:nth-child(3),
				.move-1 .line-9 span:nth-child(4),
				.move-1 .line-9 span:nth-child(11),
				.move-1 .line-9 span:nth-child(12),
				.move-1 .line-9 span:nth-child(14),
				.move-1 .line-10 span:nth-child(1),
				.move-1 .line-10 span:nth-child(5),
				.move-1 .line-10 span:nth-child(6),
				.move-1 .line-10 span:nth-child(7),
				.move-1 .line-10 span:nth-child(8),
				.move-1 .line-10 span:nth-child(9),
				.move-1 .line-10 span:nth-child(10),
				.move-1 .line-10 span:nth-child(11),
				.move-1 .line-11 span:nth-child(5),
				.move-1 .line-11 span:nth-child(6),
				.move-1 .line-11 span:nth-child(7),
				.move-1 .line-11 span:nth-child(8),
				.move-1 .line-11 span:nth-child(9),
				.move-1 .line-11 span:nth-child(10),
				.move-1 .line-11 span:nth-child(11),
				.move-1 .line-11 span:nth-child(12),
				.move-1 .line-12 span:nth-child(5),
				.move-1 .line-12 span:nth-child(7),
				.move-1 .line-12 span:nth-child(8),
				.move-1 .line-12 span:nth-child(9),
				.move-1 .line-12 span:nth-child(10),
				.move-1 .line-12 span:nth-child(11),
				.move-1 .line-12 span:nth-child(12),
				.move-1 .line-13 span:nth-child(7),
				.move-1 .line-13 span:nth-child(8),
				.move-1 .line-13 span:nth-child(9),
				.move-1 .line-13 span:nth-child(10),
				.move-1 .line-13 span:nth-child(11),
				.move-1 .line-13 span:nth-child(12),
				.move-1 .line-14 span:nth-child(7),
				.move-1 .line-14 span:nth-child(9),	
				.move-1 .line-14 span:nth-child(11),
				.move-2 .line-3 span:nth-child(6),
				.move-2 .line-3 span:nth-child(11),
				.move-2 .line-4 span:nth-child(6),
				.move-2 .line-4 span:nth-child(7),
				.move-2 .line-4 span:nth-child(8),
				.move-2 .line-4 span:nth-child(10),
				.move-2 .line-4 span:nth-child(11),
				.move-2 .line-4 span:nth-child(12),
				.move-2 .line-5 span:nth-child(5),
				.move-2 .line-5 span:nth-child(6),
				.move-2 .line-5 span:nth-child(7),
				.move-2 .line-5 span:nth-child(8),
				.move-2 .line-5 span:nth-child(9),
				.move-2 .line-5 span:nth-child(10),
				.move-2 .line-5 span:nth-child(11),
				.move-2 .line-5 span:nth-child(12),
				.move-2 .line-6 span:nth-child(5),
				.move-2 .line-6 span:nth-child(11),
				.move-2 .line-6 span:nth-child(12),
				.move-2 .line-6 span:nth-child(13),
				.move-2 .line-7 span:nth-child(2),
				.move-2 .line-7 span:nth-child(5),
				.move-2 .line-7 span:nth-child(12),
				.move-2 .line-7 span:nth-child(13),
				.move-2 .line-7 span:nth-child(15),
				.move-2 .line-8 span:nth-child(3),
				.move-2 .line-8 span:nth-child(4),
				.move-2 .line-8 span:nth-child(13),
				.move-2 .line-8 span:nth-child(14),
				.move-2 .line-9 span:nth-child(4),
				.move-2 .line-9 span:nth-child(5),
				.move-2 .line-9 span:nth-child(12),
				.move-2 .line-9 span:nth-child(13),
				.move-2 .line-10 span:nth-child(4),
				.move-2 .line-10 span:nth-child(5),
				.move-2 .line-10 span:nth-child(6),
				.move-2 .line-10 span:nth-child(7),
				.move-2 .line-10 span:nth-child(8),
				.move-2 .line-10 span:nth-child(9),
				.move-2 .line-10 span:nth-child(10),
				.move-2 .line-10 span:nth-child(11),
				.move-2 .line-10 span:nth-child(12),
				.move-2 .line-10 span:nth-child(13),
				.move-2 .line-10 span:nth-child(14),
				.move-2 .line-11 span:nth-child(3),
				.move-2 .line-11 span:nth-child(5),
				.move-2 .line-11 span:nth-child(6),
				.move-2 .line-11 span:nth-child(7),
				.move-2 .line-11 span:nth-child(8),
				.move-2 .line-11 span:nth-child(9),
				.move-2 .line-11 span:nth-child(10),
				.move-2 .line-11 span:nth-child(11),
				.move-2 .line-11 span:nth-child(12),
				.move-2 .line-11 span:nth-child(13),
				.move-2 .line-11 span:nth-child(15),
				.move-2 .line-12 span:nth-child(5),
				.move-2 .line-12 span:nth-child(6),
				.move-2 .line-12 span:nth-child(7),
				.move-2 .line-12 span:nth-child(8),
				.move-2 .line-12 span:nth-child(9),
				.move-2 .line-12 span:nth-child(10),
				.move-2 .line-12 span:nth-child(11),
				.move-2 .line-12 span:nth-child(12),
				.move-2 .line-12 span:nth-child(13),
				.move-2 .line-13 span:nth-child(6),
				.move-2 .line-13 span:nth-child(7),
				.move-2 .line-13 span:nth-child(8),
				.move-2 .line-13 span:nth-child(9),
				.move-2 .line-13 span:nth-child(10),
				.move-2 .line-13 span:nth-child(11),
				.move-2 .line-13 span:nth-child(13),
				.move-3 .line-1 span:nth-child(7),
				.move-3 .line-1 span:nth-child(11),
				.move-3 .line-2 span:nth-child(7),
				.move-3 .line-2 span:nth-child(8),
				.move-3 .line-2 span:nth-child(10),
				.move-3 .line-2 span:nth-child(11),
				.move-3 .line-2 span:nth-child(12),
				.move-3 .line-3 span:nth-child(6),
				.move-3 .line-3 span:nth-child(7),
				.move-3 .line-3 span:nth-child(8),
				.move-3 .line-3 span:nth-child(9),
				.move-3 .line-3 span:nth-child(10),
				.move-3 .line-3 span:nth-child(11),
				.move-3 .line-3 span:nth-child(12),
				.move-3 .line-4 span:nth-child(6),
				.move-3 .line-4 span:nth-child(7),
				.move-3 .line-4 span:nth-child(10),
				.move-3 .line-4 span:nth-child(11),
				.move-3 .line-4 span:nth-child(12),
				.move-3 .line-4 span:nth-child(13),
				.move-3 .line-5 span:nth-child(6),
				.move-3 .line-5 span:nth-child(12),
				.move-3 .line-5 span:nth-child(13),
				.move-3 .line-5 span:nth-child(15),
				.move-3 .line-6 span:nth-child(5),
				.move-3 .line-6 span:nth-child(6),
				.move-3 .line-6 span:nth-child(13),
				.move-3 .line-6 span:nth-child(14),
				.move-3 .line-7 span:nth-child(3),
				.move-3 .line-7 span:nth-child(5),
				.move-3 .line-7 span:nth-child(13),
				.move-3 .line-8 span:nth-child(4),
				.move-3 .line-8 span:nth-child(5),
				.move-3 .line-8 span:nth-child(12),
				.move-3 .line-8 span:nth-child(13),
				.move-3 .line-8 span:nth-child(14),
				.move-3 .line-9 span:nth-child(5),
				.move-3 .line-9 span:nth-child(6),
				.move-3 .line-9 span:nth-child(11),
				.move-3 .line-9 span:nth-child(12),
				.move-3 .line-9 span:nth-child(13),
				.move-3 .line-9 span:nth-child(15),
				.move-3 .line-10 span:nth-child(4),
				.move-3 .line-10 span:nth-child(8),
				.move-3 .line-10 span:nth-child(9),
				.move-3 .line-10 span:nth-child(10),
				.move-3 .line-10 span:nth-child(11),
				.move-3 .line-10 span:nth-child(12),
				.move-3 .line-11 span:nth-child(8),
				.move-3 .line-11 span:nth-child(9),
				.move-3 .line-11 span:nth-child(10),
				.move-3 .line-11 span:nth-child(11),
				.move-3 .line-11 span:nth-child(12),
				.move-3 .line-12 span:nth-child(9),
				.move-3 .line-12 span:nth-child(10),
				.move-3 .line-12 span:nth-child(11),
				.move-3 .line-12 span:nth-child(12),
				.move-3 .line-13 span:nth-child(9),
				.move-3 .line-13 span:nth-child(10),
				.move-3 .line-13 span:nth-child(11),
				.move-3 .line-13 span:nth-child(12),
				.move-3 .line-14 span:nth-child(10),
				.move-3 .line-14 span:nth-child(11),
				.move-4 .line-1 span:nth-child(7),
				.move-4 .line-1 span:nth-child(8),
				.move-4 .line-1 span:nth-child(11),
				.move-4 .line-1 span:nth-child(12),
				.move-4 .line-2 span:nth-child(6),
				.move-4 .line-2 span:nth-child(7),
				.move-4 .line-2 span:nth-child(8),
				.move-4 .line-2 span:nth-child(9),
				.move-4 .line-2 span:nth-child(10),
				.move-4 .line-2 span:nth-child(11),
				.move-4 .line-2 span:nth-child(12),
				.move-4 .line-3 span:nth-child(6),
				.move-4 .line-3 span:nth-child(7),
				.move-4 .line-3 span:nth-child(8),
				.move-4 .line-3 span:nth-child(9),
				.move-4 .line-3 span:nth-child(10),
				.move-4 .line-3 span:nth-child(11),
				.move-4 .line-3 span:nth-child(12),
				.move-4 .line-3 span:nth-child(13),
				.move-4 .line-4 span:nth-child(6),
				.move-4 .line-4 span:nth-child(12),
				.move-4 .line-4 span:nth-child(13),
				.move-4 .line-5 span:nth-child(3),
				.move-4 .line-5 span:nth-child(5),
				.move-4 .line-5 span:nth-child(13),
				.move-4 .line-5 span:nth-child(14),
				.move-4 .line-5 span:nth-child(16),
				.move-4 .line-6 span:nth-child(4),
				.move-4 .line-6 span:nth-child(5),
				.move-4 .line-6 span:nth-child(13),
				.move-4 .line-6 span:nth-child(14),
				.move-4 .line-6 span:nth-child(15),
				.move-4 .line-7 span:nth-child(5),
				.move-4 .line-7 span:nth-child(13),
				.move-4 .line-7 span:nth-child(14),
				.move-4 .line-8 span:nth-child(5),
				.move-4 .line-8 span:nth-child(6),
				.move-4 .line-8 span:nth-child(11),
				.move-4 .line-8 span:nth-child(12),
				.move-4 .line-8 span:nth-child(13),
				.move-4 .line-9 span:nth-child(4),
				.move-4 .line-9 span:nth-child(8),
				.move-4 .line-9 span:nth-child(9),
				.move-4 .line-9 span:nth-child(10),
				.move-4 .line-9 span:nth-child(11),
				.move-4 .line-9 span:nth-child(15),
				.move-4 .line-10 span:nth-child(8),
				.move-4 .line-10 span:nth-child(9),
				.move-4 .line-10 span:nth-child(10),
				.move-4 .line-10 span:nth-child(11),
				.move-4 .line-10 span:nth-child(12),
				.move-4 .line-11 span:nth-child(8),
				.move-4 .line-11 span:nth-child(9),
				.move-4 .line-11 span:nth-child(10),
				.move-4 .line-11 span:nth-child(11),
				.move-4 .line-11 span:nth-child(12),
				.move-4 .line-12 span:nth-child(9),
				.move-4 .line-12 span:nth-child(10),
				.move-4 .line-12 span:nth-child(11),
				.move-4 .line-12 span:nth-child(12),
				.move-4 .line-13 span:nth-child(10),
				.move-4 .line-13 span:nth-child(11),
				.move-5 .line-2 span:nth-child(6),
				.move-5 .line-2 span:nth-child(10),
				.move-5 .line-3 span:nth-child(5),
				.move-5 .line-3 span:nth-child(6),
				.move-5 .line-3 span:nth-child(7),
				.move-5 .line-3 span:nth-child(9),
				.move-5 .line-3 span:nth-child(10),
				.move-5 .line-3 span:nth-child(11),
				.move-5 .line-4 span:nth-child(5),
				.move-5 .line-4 span:nth-child(6),
				.move-5 .line-4 span:nth-child(7),
				.move-5 .line-4 span:nth-child(8),
				.move-5 .line-4 span:nth-child(9),
				.move-5 .line-4 span:nth-child(10),
				.move-5 .line-4 span:nth-child(11),
				.move-5 .line-5 span:nth-child(4),
				.move-5 .line-5 span:nth-child(5),
				.move-5 .line-5 span:nth-child(6),
				.move-5 .line-5 span:nth-child(9),
				.move-5 .line-5 span:nth-child(10),
				.move-5 .line-5 span:nth-child(11),
				.move-5 .line-5 span:nth-child(12),
				.move-5 .line-5 span:nth-child(14),
				.move-5 .line-6 span:nth-child(2),
				.move-5 .line-6 span:nth-child(4),
				.move-5 .line-6 span:nth-child(5),
				.move-5 .line-6 span:nth-child(11),
				.move-5 .line-6 span:nth-child(12),
				.move-5 .line-6 span:nth-child(13),
				.move-5 .line-7 span:nth-child(3),
				.move-5 .line-7 span:nth-child(4),
				.move-5 .line-7 span:nth-child(11),
				.move-5 .line-7 span:nth-child(12),
				.move-5 .line-8 span:nth-child(4),
				.move-5 .line-8 span:nth-child(11),
				.move-5 .line-8 span:nth-child(12),
				.move-5 .line-8 span:nth-child(13),
				.move-5 .line-9 span:nth-child(3),
				.move-5 .line-9 span:nth-child(5),
				.move-5 .line-9 span:nth-child(10),
				.move-5 .line-9 span:nth-child(11),
				.move-5 .line-9 span:nth-child(14),
				.move-5 .line-10 span:nth-child(2),
				.move-5 .line-10 span:nth-child(6),
				.move-5 .line-10 span:nth-child(7),
				.move-5 .line-10 span:nth-child(8),
				.move-5 .line-10 span:nth-child(9),
				.move-5 .line-10 span:nth-child(10),
				.move-5 .line-10 span:nth-child(11),
				.move-5 .line-11 span:nth-child(6),
				.move-5 .line-11 span:nth-child(7),
				.move-5 .line-11 span:nth-child(8),
				.move-5 .line-11 span:nth-child(9),
				.move-5 .line-11 span:nth-child(10),
				.move-5 .line-11 span:nth-child(11),
				.move-5 .line-11 span:nth-child(12),
				.move-5 .line-12 span:nth-child(6),
				.move-5 .line-12 span:nth-child(7),
				.move-5 .line-12 span:nth-child(8),
				.move-5 .line-12 span:nth-child(9),
				.move-5 .line-12 span:nth-child(10),
				.move-5 .line-12 span:nth-child(11),
				.move-5 .line-12 span:nth-child(12),
				.move-5 .line-13 span:nth-child(6),
				.move-5 .line-13 span:nth-child(8),
				.move-5 .line-13 span:nth-child(10),
				.move-5 .line-13 span:nth-child(12) {
					background: #00603c;
				}
				.move-1 .line-6 span:nth-child(5),
				.move-1 .line-6 span:nth-child(6),
				.move-1 .line-6 span:nth-child(7),
				.move-1 .line-6 span:nth-child(8),
				.move-1 .line-6 span:nth-child(9),
				.move-1 .line-6 span:nth-child(10),
				.move-1 .line-7 span:nth-child(4),
				.move-1 .line-7 span:nth-child(5),
				.move-1 .line-7 span:nth-child(7),
				.move-1 .line-7 span:nth-child(8),
				.move-1 .line-7 span:nth-child(10),
				.move-1 .line-7 span:nth-child(11),
				.move-1 .line-8 span:nth-child(4),
				.move-1 .line-8 span:nth-child(5),
				.move-1 .line-8 span:nth-child(6),
				.move-1 .line-8 span:nth-child(9),
				.move-1 .line-8 span:nth-child(10),
				.move-1 .line-8 span:nth-child(11),
				.move-1 .line-9 span:nth-child(5),
				.move-1 .line-9 span:nth-child(6),
				.move-1 .line-9 span:nth-child(7),
				.move-1 .line-9 span:nth-child(8),
				.move-1 .line-9 span:nth-child(9),
				.move-1 .line-9 span:nth-child(10),
				.move-2 .line-6 span:nth-child(6),
				.move-2 .line-6 span:nth-child(7),
				.move-2 .line-6 span:nth-child(8),
				.move-2 .line-6 span:nth-child(9),
				.move-2 .line-6 span:nth-child(10),
				.move-2 .line-7 span:nth-child(6),
				.move-2 .line-7 span:nth-child(8),
				.move-2 .line-7 span:nth-child(9),
				.move-2 .line-7 span:nth-child(11),
				.move-2 .line-8 span:nth-child(5),
				.move-2 .line-8 span:nth-child(6),
				.move-2 .line-8 span:nth-child(7),
				.move-2 .line-8 span:nth-child(10),
				.move-2 .line-8 span:nth-child(11),
				.move-2 .line-8 span:nth-child(12),
				.move-2 .line-9 span:nth-child(6),
				.move-2 .line-9 span:nth-child(7),
				.move-2 .line-9 span:nth-child(8),
				.move-2 .line-9 span:nth-child(9),
				.move-2 .line-9 span:nth-child(10),
				.move-2 .line-9 span:nth-child(11),
				.move-3 .line-4 span:nth-child(8),
				.move-3 .line-4 span:nth-child(9),
				.move-3 .line-5 span:nth-child(7),
				.move-3 .line-5 span:nth-child(8),
				.move-3 .line-5 span:nth-child(9),
				.move-3 .line-5 span:nth-child(10),
				.move-3 .line-5 span:nth-child(11),
				.move-3 .line-6 span:nth-child(8),
				.move-3 .line-6 span:nth-child(9),
				.move-3 .line-6 span:nth-child(11),
				.move-3 .line-6 span:nth-child(12),
				.move-3 .line-7 span:nth-child(6),
				.move-3 .line-7 span:nth-child(7),
				.move-3 .line-7 span:nth-child(10),
				.move-3 .line-7 span:nth-child(11),
				.move-3 .line-7 span:nth-child(12),
				.move-3 .line-8 span:nth-child(6),
				.move-3 .line-8 span:nth-child(7),
				.move-3 .line-8 span:nth-child(8),
				.move-3 .line-8 span:nth-child(9),
				.move-3 .line-8 span:nth-child(10),
				.move-3 .line-8 span:nth-child(11),
				.move-3 .line-9 span:nth-child(7),
				.move-3 .line-9 span:nth-child(8),
				.move-3 .line-9 span:nth-child(9),
				.move-3 .line-9 span:nth-child(10),
				.move-4 .line-4 span:nth-child(7),
				.move-4 .line-4 span:nth-child(8),
				.move-4 .line-4 span:nth-child(9),
				.move-4 .line-4 span:nth-child(10),
				.move-4 .line-4 span:nth-child(11),
				.move-4 .line-5 span:nth-child(6),
				.move-4 .line-5 span:nth-child(8),
				.move-4 .line-5 span:nth-child(9),
				.move-4 .line-5 span:nth-child(11),
				.move-4 .line-5 span:nth-child(12),
				.move-4 .line-6 span:nth-child(6),
				.move-4 .line-6 span:nth-child(7),
				.move-4 .line-6 span:nth-child(10),
				.move-4 .line-6 span:nth-child(11),
				.move-4 .line-6 span:nth-child(12),
				.move-4 .line-7 span:nth-child(6),
				.move-4 .line-7 span:nth-child(7),
				.move-4 .line-7 span:nth-child(8),
				.move-4 .line-7 span:nth-child(10),
				.move-4 .line-7 span:nth-child(11),
				.move-4 .line-7 span:nth-child(12),
				.move-4 .line-8 span:nth-child(7),
				.move-4 .line-8 span:nth-child(8),
				.move-4 .line-8 span:nth-child(9),
				.move-4 .line-8 span:nth-child(10),
				.move-5 .line-5 span:nth-child(7),
				.move-5 .line-5 span:nth-child(8),
				.move-5 .line-6 span:nth-child(6),
				.move-5 .line-6 span:nth-child(7),
				.move-5 .line-6 span:nth-child(8),
				.move-5 .line-6 span:nth-child(9),
				.move-5 .line-6 span:nth-child(10),
				.move-5 .line-7 span:nth-child(5),
				.move-5 .line-7 span:nth-child(7),
				.move-5 .line-7 span:nth-child(8),
				.move-5 .line-7 span:nth-child(10),
				.move-5 .line-8 span:nth-child(5),
				.move-5 .line-8 span:nth-child(6),
				.move-5 .line-8 span:nth-child(9),
				.move-5 .line-8 span:nth-child(10),
				.move-5 .line-9 span:nth-child(6),
				.move-5 .line-9 span:nth-child(7),
				.move-5 .line-9 span:nth-child(8),
				.move-5 .line-9 span:nth-child(9) {
					background: #3aad52;
				}
				.move-1 .line-7 span:nth-child(6),
				.move-1 .line-7 span:nth-child(9),
				.move-1 .line-8 span:nth-child(7),
				.move-1 .line-8 span:nth-child(8),
				.move-2 .line-7 span:nth-child(7),
				.move-2 .line-7 span:nth-child(10),
				.move-2 .line-8 span:nth-child(8),
				.move-2 .line-8 span:nth-child(9),
				.move-3 .line-6 span:nth-child(7),
				.move-3 .line-6 span:nth-child(10),
				.move-3 .line-7 span:nth-child(8),
				.move-3 .line-7 span:nth-child(9),
				.move-4 .line-5 span:nth-child(7),
				.move-4 .line-5 span:nth-child(10),
				.move-4 .line-6 span:nth-child(8),
				.move-4 .line-6 span:nth-child(9),
				.move-4 .line-7 span:nth-child(9),
				.move-5 .line-7 span:nth-child(6),
				.move-5 .line-7 span:nth-child(9),
				.move-5 .line-8 span:nth-child(7),
				.move-5 .line-8 span:nth-child(8) {
					background: #1b4332;
				}
        `}
      </style>
      <div className="clip-container">
        <div className="cat-wrapper cat-1">
          <div className="move move-1">
            <div className="line line-1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-4">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-6">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-7">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-8">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-9">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-10">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-11">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-13">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-14">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-15">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-16">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="move move-2">
            <div className="line line-1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-4">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-6">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-7">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-8">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-9">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-10">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-11">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-13">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-14">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-15">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-16">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="move move-3">
            <div className="line line-1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-4">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-6">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-7">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-8">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-9">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-10">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-11">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-13">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-14">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-15">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-16">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="move move-4">
            <div className="line line-1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-4">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-6">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-7">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-8">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-9">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-10">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-11">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-13">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-14">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-15">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-16">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="move move-5">
            <div className="line line-1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-4">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-6">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-7">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-8">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-9">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-10">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-11">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-13">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-14">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-15">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-16">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="cat-wrapper cat-2">
          <div className="move move-1">
            <div className="line line-1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-4">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-6">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-7">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-8">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-9">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-10">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-11">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-13">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-14">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-15">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-16">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="move move-2">
            <div className="line line-1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-4">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-6">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-7">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-8">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-9">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-10">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-11">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-13">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-14">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-15">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-16">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="move move-3">
            <div className="line line-1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-4">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-6">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-7">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-8">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-9">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-10">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-11">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-13">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-14">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-15">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-16">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="move move-4">
            <div className="line line-1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-4">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-6">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-7">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-8">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-9">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-10">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-11">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-13">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-14">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-15">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-16">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="move move-5">
            <div className="line line-1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-4">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-5">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-6">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-7">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-8">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-9">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-10">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-11">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-12">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-13">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-14">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-15">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="line line-16">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
