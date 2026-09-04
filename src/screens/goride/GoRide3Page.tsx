import React, { useState } from 'react';
import { useBudget } from '../../context/BudgetContext';
import { 
  ArrowLeft, 
  Plus, 
  Sparkles, 
  Info, 
  User, 
  ArrowRight, 
  Percent, 
  MoreHorizontal, 
  Wallet, 
  Bike,
  AlertTriangle
} from 'lucide-react';

export const GoRide3Page: React.FC = () => {
  const { state, goToScreen, openSheet, setSelectedCategory, simulateOrderGoRide } = useBudget();
  const [selectedRide, setSelectedRide] = useState<'cepat' | 'comfort'>('cepat');
  const [showOverBudgetPrompt, setShowOverBudgetPrompt] = useState(false);

  const currentFare = selectedRide === 'cepat' ? 58500 : 63500;
  const transportCat = state.categories.find(c => c.id === 'transport');
  const dailyBalance = transportCat ? transportCat.todayRemaining : 17000;
  const isInsufficient = dailyBalance < currentFare;
  const deficit = Math.max(0, currentFare - dailyBalance);

  const handleBookClick = () => {
    if (isInsufficient) {
      setShowOverBudgetPrompt(true);
    } else {
      simulateOrderGoRide(currentFare);
    }
  };

  return (
    <div 
      style={{ 
        background: '#e2e8f0', 
        height: '100%', 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        overflow: 'hidden', 
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' 
      }}
    >
      {/* Map Route Area */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '380px', overflow: 'hidden' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice">
          <rect width="100%" height="100%" fill="#eaf5ea" />
          <path d="M0,0 Q120,40 240,10 T400,30 L400,0 Z" fill="#d7ecd7" />
          <path d="M0,80 Q160,140 280,70 T400,100 L400,0 L0,0 Z" fill="#cde5cd" opacity="0.6" />
          <path d="M120,220 Q240,180 340,240 T400,280 L400,320 L120,320 Z" fill="#d7ecd7" />
          <path d="M-20,120 L420,130" stroke="#cbd5e1" strokeWidth="4" fill="none" />
          <path d="M100,50 L110,260" stroke="#cbd5e1" strokeWidth="6" fill="none" />
          <path d="M110,260 L380,240" stroke="#cbd5e1" strokeWidth="6" fill="none" />
          <path d="M220,0 L200,320" stroke="#cbd5e1" strokeWidth="4" fill="none" />
          <text x="80" y="70" fontSize="11" fontWeight="800" fill="#334155">Depok</text>
          <text x="10" y="115" fontSize="10" fontWeight="700" fill="#64748b">Cimahi</text>
          <text x="250" y="195" fontSize="10" fontWeight="700" fill="#64748b">Mie Gacoan</text>
          <path 
            d="M110,105 L110,125 Q130,130 180,130 Q210,145 235,140 L275,138" 
            stroke="#00aa13" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
          />
          <g transform="translate(100, 85)">
            <circle cx="10" cy="10" r="13" fill="#00aa13" stroke="#ffffff" strokeWidth="2.5" />
            <path d="M10,15 L10,6 M6,10 L10,6 L14,10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="10" cy="27" r="4.5" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
          </g>
          <g transform="translate(265, 118)">
            <circle cx="10" cy="10" r="13" fill="#ea580c" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="10" cy="10" r="4.5" fill="#ffffff" />
          </g>
        </svg>
        <div 
          style={{ 
            position: 'absolute', 
            top: '12px', 
            left: '14px', 
            right: '14px', 
            background: '#ffffff', 
            borderRadius: '16px', 
            padding: '10px 14px', 
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            zIndex: 10 
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '75%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#00aa13', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '10px', fontWeight: 900 }}>↑</span>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>Kos Daniel</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '9px', fontWeight: 900 }}>●</span>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>Universitas Indonesia</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#fef3c7', padding: '5px 10px', borderRadius: '999px', cursor: 'pointer' }}>
            <Plus size={13} color="#b45309" />
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#92400e' }}>Tambah</span>
          </div>
        </div>
      </div>

      <div 
        style={{ 
          marginTop: 'auto', 
          background: '#ffffff', 
          borderTopLeftRadius: '24px', 
          borderTopRightRadius: '24px', 
          padding: '10px 16px 16px', 
          boxShadow: '0 -6px 20px rgba(0,0,0,0.12)', 
          position: 'relative', 
          zIndex: 20 
        }}
      >
        <div 
          style={{ 
            position: 'absolute', 
            bottom: 'calc(100% + 12px)', 
            left: '14px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            zIndex: 25 
          }}
        >
          <button 
            onClick={() => goToScreen('goride_2')}
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: '#ffffff', 
              border: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              boxShadow: '0 3px 12px rgba(0,0,0,0.18)', 
              cursor: 'pointer' 
            }}
          >
            <ArrowLeft size={19} color="#0f172a" />
          </button>
          <div 
            style={{ 
              background: '#ffffff', 
              borderRadius: '999px', 
              padding: '7px 14px', 
              boxShadow: '0 3px 12px rgba(0,0,0,0.14)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              cursor: 'pointer' 
            }}
          >
            <Sparkles size={14} color="#00aa13" />
            <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#0f172a' }}>Ganti tipe trip</span>
          </div>
        </div>
        
        <div style={{ width: '36px', height: '4px', borderRadius: '999px', background: '#cbd5e1', margin: '0 auto 10px' }} />

        <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', marginBottom: '12px' }}>
          <div style={{ position: 'relative', paddingBottom: '6px', cursor: 'pointer' }}>
            <span style={{ fontSize: '14px', fontWeight: 800, color: '#00aa13' }}>GoRide</span>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#00aa13', borderRadius: '999px' }} />
          </div>
          <div style={{ paddingBottom: '6px', cursor: 'pointer' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#64748b' }}>GoCar</span>
          </div>
        </div>

        <div 
          onClick={() => setSelectedRide('cepat')}
          style={{ 
            background: selectedRide === 'cepat' ? '#ffffff' : '#f8fafc', 
            borderRadius: '16px', 
            border: selectedRide === 'cepat' ? '2px solid #00aa13' : '1px solid #e2e8f0', 
            padding: '10px 12px', 
            marginBottom: '8px', 
            boxShadow: selectedRide === 'cepat' ? '0 2px 10px rgba(0, 170, 19, 0.08)' : 'none',
            cursor: 'pointer' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bike size={16} color="#00aa13" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#0f172a' }}>GoRide</span>
              <Info size={13} color="#64748b" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto', fontSize: '11px', color: '#64748b' }}>
              <User size={12} />
              <span>1 penumpang</span>
            </div>
          </div>
          <div 
            style={{ 
              background: selectedRide === 'cepat' ? '#dcfce7' : 'transparent', 
              borderRadius: '12px', 
              padding: '8px 10px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              marginBottom: '6px' 
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ background: '#7c3aed', color: '#ffffff', fontSize: '8px', fontWeight: 900, padding: '1px 5px', borderRadius: '3px' }}>
                  CEPAAAT
                </span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#0f172a' }}>4 menit</span>
              </div>
              <div style={{ fontSize: '9.5px', color: '#047857', marginTop: '2px' }}>
                Cepet dijemput sesuai estimasi
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: 900, color: '#0f172a' }}>Rp58.500</span>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: selectedRide === 'cepat' ? '#00aa13' : '#cbd5e1', border: '3px solid #ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {selectedRide === 'cepat' && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff' }} />}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 6px', opacity: 0.6 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ background: '#e2e8f0', color: '#475569', fontSize: '8px', fontWeight: 900, padding: '1px 4px', borderRadius: '3px' }}>
                  MURAAAH
                </span>
                <span style={{ fontSize: '11px', color: '#64748b' }}>-</span>
              </div>
              <div style={{ fontSize: '9px', color: '#64748b' }}>Maksimal jarak perjalanan 15km</div>
            </div>
            <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#b45309' }}>Gak tersedia</span>
          </div>
        </div>

        <div 
          onClick={() => setSelectedRide('comfort')}
          style={{ 
            background: selectedRide === 'comfort' ? '#ffffff' : '#f8fafc', 
            borderRadius: '14px', 
            border: selectedRide === 'comfort' ? '2px solid #00aa13' : '1px solid #e2e8f0', 
            padding: '10px 12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '10px',
            cursor: 'pointer' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bike size={16} color="#475569" />
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>GoRide Comfort</div>
              <div style={{ fontSize: '10px', color: '#64748b' }}>4-6 menit • 1 penumpang</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#0f172a' }}>Rp63.500</span>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: selectedRide === 'comfort' ? '#00aa13' : '#cbd5e1', border: '3px solid #ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {selectedRide === 'comfort' && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff' }} />}
            </div>
          </div>
        </div>

        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '8px 2px', 
            borderTop: '1px solid #f1f5f9', 
            marginBottom: isInsufficient ? '6px' : '10px', 
            gap: '8px' 
          }}
        >
          <div 
            onClick={() => {
              if (isInsufficient) {
                setSelectedCategory('transport');
                openSheet('reallocate', 'transport');
              }
            }}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1.2, minWidth: 0, cursor: isInsufficient ? 'pointer' : 'default' }}
          >
            <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#00aed6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Wallet size={14} color="#ffffff" />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                GoPay (Alokasi Transport) ❯
              </div>
              <div style={{ fontSize: '10.5px', fontWeight: 800, color: isInsufficient ? '#ef4444' : '#00aa13', whiteSpace: 'nowrap' }}>
                Sisa kuota: Rp{dailyBalance.toLocaleString('id-ID')}
              </div>
            </div>
          </div>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px', 
              background: '#fff7ed', 
              border: '1px solid #fed7aa', 
              borderRadius: '999px', 
              padding: '4px 8px', 
              cursor: 'pointer', 
              flexShrink: 0 
            }}
          >
            <Percent size={11} color="#ea580c" />
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#c2410c' }}>1 voucher</span>
          </div>
          <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
            <MoreHorizontal size={16} color="#64748b" />
          </div>
        </div>

        {isInsufficient && (
          <div 
            style={{ 
              background: '#fff1f2', 
              border: '1px solid #fecdd3', 
              borderRadius: '12px', 
              padding: '6px 10px', 
              marginBottom: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <AlertTriangle size={13} color="#e11d48" />
              <span style={{ fontSize: '10.5px', color: '#9f1239', fontWeight: 700 }}>
                Kurang Rp{deficit.toLocaleString('id-ID')} dari kuota transport
              </span>
            </div>
            <button 
              onClick={() => {
                setSelectedCategory('transport');
                openSheet('reallocate', 'transport');
              }}
              style={{ 
                background: '#e11d48', 
                border: 'none', 
                borderRadius: '999px', 
                padding: '3px 8px', 
                color: '#ffffff', 
                fontSize: '10px', 
                fontWeight: 800, 
                cursor: 'pointer' 
              }}
            >
              Atur Ulang
            </button>
          </div>
        )}

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button 
            style={{ 
              background: '#ffffff', 
              border: '1.5px solid #00aa13', 
              borderRadius: '999px', 
              padding: '10px 14px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              cursor: 'pointer' 
            }}
          >
            <User size={14} color="#00aa13" />
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#00aa13' }}>Instant</span>
          </button>
          <button 
            onClick={handleBookClick}
            style={{ 
              flex: 1, 
              background: '#00aa13', 
              border: 'none', 
              borderRadius: '999px', 
              padding: '12px 16px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              cursor: 'pointer', 
              boxShadow: '0 4px 12px rgba(0, 170, 19, 0.35)' 
            }}
          >
            <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#ffffff' }}>Book</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '13.5px', fontWeight: 900, color: '#ffffff' }}>Rp{currentFare.toLocaleString('id-ID')}</span>
              <ArrowRight size={15} color="#ffffff" />
            </div>
          </button>
        </div>
      </div>

      {showOverBudgetPrompt && (
        <div 
          style={{ 
            position: 'fixed', 
            inset: 0, 
            background: 'rgba(0,0,0,0.65)', 
            zIndex: 120, 
            display: 'flex', 
            alignItems: 'flex-end', 
            justifyContent: 'center' 
          }}
        >
          <div 
            style={{ 
              width: '100%', 
              maxWidth: '395px', 
              background: '#ffffff', 
              borderTopLeftRadius: '24px', 
              borderTopRightRadius: '24px', 
              padding: '20px 20px 24px', 
              boxShadow: '0 -8px 30px rgba(0,0,0,0.25)' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlertTriangle size={20} color="#dc2626" />
              </div>
              <div>
                <h3 style={{ fontSize: '15.5px', fontWeight: 900, color: '#0f172a', margin: 0 }}>
                  Budget Transportasi Kurang
                </h3>
                <span style={{ fontSize: '11px', color: '#64748b' }}>
                  Perencanaan Anggaran GoPay
                </span>
              </div>
            </div>
            <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: 1.45, margin: '0 0 16px' }}>
              Tarif GoRide <strong>Rp{currentFare.toLocaleString('id-ID')}</strong> melebihi kuota transport harian (<strong>Rp{dailyBalance.toLocaleString('id-ID')}</strong>). Kurang <strong>Rp{deficit.toLocaleString('id-ID')}</strong>.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button 
                onClick={() => {
                  setShowOverBudgetPrompt(false);
                  setSelectedCategory('transport');
                  openSheet('reallocate', 'transport');
                }}
                style={{ 
                  width: '100%', 
                  padding: '13px', 
                  borderRadius: '999px', 
                  background: '#00aa13', 
                  border: 'none', 
                  color: '#ffffff', 
                  fontSize: '13.5px', 
                  fontWeight: 800, 
                  cursor: 'pointer' 
                }}
              >
                Atur Ulang Budget di GoPay 🔄
              </button>
              <button 
                onClick={() => {
                  setShowOverBudgetPrompt(false);
                  simulateOrderGoRide(currentFare);
                }}
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  borderRadius: '999px', 
                  background: '#fee2e2', 
                  border: '1px solid #fca5a5', 
                  color: '#b91c1c', 
                  fontSize: '13px', 
                  fontWeight: 800, 
                  cursor: 'pointer' 
                }}
              >
                Tetap Pesan (Over-Budget)
              </button>
              <button 
                onClick={() => setShowOverBudgetPrompt(false)}
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  borderRadius: '999px', 
                  background: 'transparent', 
                  border: 'none', 
                  color: '#64748b', 
                  fontSize: '12.5px', 
                  fontWeight: 700, 
                  cursor: 'pointer' 
                }}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoRide3Page;
