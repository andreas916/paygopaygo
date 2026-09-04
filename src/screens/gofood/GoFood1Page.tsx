import React from 'react';
import { useBudget } from '../../context/BudgetContext';
import { 
  X, 
  MapPin, 
  Heart, 
  Receipt, 
  Search, 
  Utensils, 
  Bike, 
  ArrowRight, 
  Scissors, 
  Users, 
  ShoppingBag,
  ChevronDown
} from 'lucide-react';

export const GoFood1Page: React.FC = () => {
  const { goToScreen } = useBudget();

  return (
    <div 
      style={{ 
        background: '#ffffff', 
        minHeight: '100%', 
        position: 'relative', 
        color: '#0f172a', 
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        flexShrink: 0,
        paddingBottom: '20px'
      }}
    >
      {/* Top Red Hero Header */}
      <div 
        style={{ 
          background: 'linear-gradient(180deg, #be123c 0%, #e11d48 60%, #f43f5e 100%)', 
          padding: '12px 16px 36px',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0
        }}
      >
        {/* Top Action Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          {/* Close Button */}
          <button 
            onClick={() => goToScreen('gojek')}
            style={{ 
              width: '36px', 
              height: '36px', 
              borderRadius: '50%', 
              background: '#ffffff', 
              border: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}
          >
            <X size={18} color="#0f172a" />
          </button>

          {/* Location Pill */}
          <div 
            style={{ 
              background: 'rgba(0, 0, 0, 0.45)', 
              borderRadius: '999px', 
              padding: '6px 14px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              fontSize: '12px',
              fontWeight: 700,
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            <MapPin size={13} color="#ffffff" fill="#ffffff" />
            <span>Kos Daniel</span>
            <ChevronDown size={14} color="#ffffff" />
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Heart size={18} color="#0f172a" />
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Receipt size={18} color="#0f172a" />
            </div>
          </div>
        </div>

        {/* Hero Title & Graphics */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginTop: '6px' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{ fontSize: '18px', fontWeight: 900, lineHeight: 1.25, margin: '0 0 6px', color: '#ffffff' }}>
              Laper? GoFoodin dari resto terenak di kotamu
            </h1>
            <p style={{ fontSize: '11.5px', color: '#ffe4e6', margin: 0, fontWeight: 500 }}>
              Cek resto-resto enak disekitarmu.
            </p>
          </div>

          {/* Food Illustration */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
            <div style={{ fontSize: '36px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>
              🍛
            </div>
            <div style={{ display: 'flex', gap: '4px', fontSize: '16px' }}>
              <span>🍔</span>
              <span>🍜</span>
              <span>🍹</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Input Bar (Overlapping) */}
      <div style={{ padding: '0 16px', marginTop: '-18px', position: 'relative', zIndex: 10, flexShrink: 0 }}>
        <div 
          style={{ 
            background: '#ffffff', 
            borderRadius: '999px', 
            padding: '11px 16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
            border: '1px solid #f1f5f9'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Search size={18} color="#64748b" />
            <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>Lagi mau mamam apa?</span>
          </div>
          <Utensils size={16} color="#ef4444" />
        </div>
      </div>

      {/* 3 Quick Categories */}
      <div style={{ display: 'flex', gap: '10px', padding: '16px 16px 14px', justifyContent: 'space-between' }}>
        {/* 1. MURAAAH Ongkir Rp1 */}
        <div style={{ flex: 1, background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '10px 8px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', cursor: 'pointer' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: '#fee2e2', margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bike size={20} color="#dc2626" />
          </div>
          <div style={{ fontSize: '9px', fontWeight: 800, color: '#00aa13', textTransform: 'uppercase' }}>MURAAAH</div>
          <div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a' }}>Rp1</div>
        </div>

        {/* 2. Resto Terdekat */}
        <div style={{ flex: 1, background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '10px 8px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', cursor: 'pointer' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: '#dcfce7', margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MapPin size={20} color="#00aa13" />
          </div>
          <div style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>Resto</div>
          <div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a' }}>Terdekat</div>
        </div>

        {/* 3. Group Order (-50%) */}
        <div style={{ flex: 1, background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '10px 8px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', cursor: 'pointer', position: 'relative' }}>
          <span style={{ position: 'absolute', top: '-6px', right: '10px', background: '#1e293b', color: '#ffffff', fontSize: '8px', fontWeight: 900, padding: '1px 5px', borderRadius: '4px' }}>
            -50%
          </span>
          <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: '#fee2e2', margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={20} color="#dc2626" />
          </div>
          <div style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>Group</div>
          <div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a' }}>Order</div>
        </div>
      </div>

      {/* "Menu Murah" Section */}
      <div 
        style={{ 
          margin: '0 16px', 
          background: 'linear-gradient(180deg, #fff1f2 0%, #ffffff 50%)', 
          borderRadius: '20px', 
          padding: '14px',
          border: '1px solid #ffe4e6',
          boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
        }}
      >
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Scissors size={16} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#0f172a' }}>Menu Murah</div>
              <div style={{ fontSize: '10px', color: '#64748b' }}>Menu enak 20rb-an aja, ongkir Rp1!</div>
            </div>
          </div>

          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
            <ArrowRight size={14} color="#0f172a" />
          </div>
        </div>

        {/* Horizontal Dishes Scroll */}
        <div 
          className="hide-scrollbar"
          style={{ 
            display: 'flex', 
            gap: '10px', 
            overflowX: 'auto', 
            paddingBottom: '4px',
            scrollbarWidth: 'none'
          }}
        >
          {/* Item 1: Ayam Bakar Madu Dada/Paha (CLICK TO PROCEED TO GOFOOD_2) */}
          <div 
            onClick={() => goToScreen('gofood_2')}
            style={{ 
              width: '150px', 
              background: '#ffffff', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              border: '1.5px solid #fda4af',
              boxShadow: '0 4px 12px rgba(244, 63, 94, 0.12)',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            {/* Food Image Container */}
            <div style={{ height: '100px', background: '#fed7aa', position: 'relative', overflow: 'hidden' }}>
              {/* Food Graphic */}
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #9a3412 100%)' }}>
                <span style={{ fontSize: '42px', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))' }}>🍗</span>
              </div>
              <span style={{ position: 'absolute', top: '6px', left: '6px', background: '#e11d48', color: '#ffffff', fontSize: '9px', fontWeight: 900, padding: '2px 5px', borderRadius: '4px' }}>
                -2%
              </span>
            </div>

            <div style={{ padding: '8px 10px 10px' }}>
              <div style={{ fontSize: '9.5px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '3px' }}>
                <Bike size={11} color="#00aa13" />
                <span>35-45 min</span>
              </div>
              <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, height: '30px', overflow: 'hidden' }}>
                Ayam Bakar Madu Dada/Pa...
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: 900, color: '#e11d48' }}>22.000</span>
                <span style={{ fontSize: '9px', color: '#94a3b8', textDecoration: 'line-through' }}>22.500</span>
              </div>
            </div>
          </div>

          {/* Item 2: New Ketoprak Indomie */}
          <div 
            onClick={() => goToScreen('gofood_2')}
            style={{ 
              width: '150px', 
              background: '#ffffff', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              border: '1px solid #e2e8f0',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <div style={{ height: '100px', background: '#fef08a', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '42px' }}>🍜</span>
              <span style={{ position: 'absolute', top: '6px', left: '6px', background: '#e11d48', color: '#ffffff', fontSize: '9px', fontWeight: 900, padding: '2px 5px', borderRadius: '4px' }}>
                -47%
              </span>
            </div>
            <div style={{ padding: '8px 10px 10px' }}>
              <div style={{ fontSize: '9.5px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '3px' }}>
                <Bike size={11} color="#00aa13" />
                <span>45-55 min</span>
              </div>
              <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, height: '30px', overflow: 'hidden' }}>
                New Ketoprak Indomie + Telor
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: 900, color: '#e11d48' }}>25.500</span>
                <span style={{ fontSize: '9px', color: '#94a3b8', textDecoration: 'line-through' }}>48.000</span>
              </div>
            </div>
          </div>

          {/* Item 3: Nasi Goreng Ayam */}
          <div 
            onClick={() => goToScreen('gofood_2')}
            style={{ 
              width: '150px', 
              background: '#ffffff', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              border: '1px solid #e2e8f0',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <div style={{ height: '100px', background: '#fed7aa', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '42px' }}>🍛</span>
              <span style={{ position: 'absolute', top: '6px', left: '6px', background: '#e11d48', color: '#ffffff', fontSize: '9px', fontWeight: 900, padding: '2px 5px', borderRadius: '4px' }}>
                -38%
              </span>
            </div>
            <div style={{ padding: '8px 10px 10px' }}>
              <div style={{ fontSize: '9.5px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '3px' }}>
                <Bike size={11} color="#00aa13" />
                <span>45-55 min</span>
              </div>
              <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, height: '30px', overflow: 'hidden' }}>
                Nasi Goreng Ayam Spesial
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '4px' }}>
                <span style={{ fontSize: '13px', fontWeight: 900, color: '#e11d48' }}>20.000</span>
                <span style={{ fontSize: '9px', color: '#94a3b8', textDecoration: 'line-through' }}>25.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pilihan Resto Terpopuler (To fill the gap naturally) */}
      <div style={{ padding: '16px 16px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Pilihan resto terpopuler
          </h3>
          <span style={{ fontSize: '11px', color: '#00aa13', fontWeight: 700, cursor: 'pointer' }}>
            Lihat Semua
          </span>
        </div>

        <div 
          className="hide-scrollbar"
          style={{ 
            display: 'flex', 
            gap: '10px', 
            overflowX: 'auto', 
            paddingBottom: '4px',
            scrollbarWidth: 'none'
          }}
        >
          {/* Resto 1 */}
          <div style={{ minWidth: '130px', background: '#ffffff', borderRadius: '14px', border: '1px solid #f1f5f9', padding: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ height: '65px', borderRadius: '10px', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '6px' }}>
              🍗
            </div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>Ayam Geprek Mas Eko</div>
            <div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>★ 4.8 • 15-25 min</div>
          </div>

          {/* Resto 2 */}
          <div style={{ minWidth: '130px', background: '#ffffff', borderRadius: '14px', border: '1px solid #f1f5f9', padding: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ height: '65px', borderRadius: '10px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '6px' }}>
              🍜
            </div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>Bakso Rusuk Solo</div>
            <div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>★ 4.7 • 20-30 min</div>
          </div>

          {/* Resto 3 */}
          <div style={{ minWidth: '130px', background: '#ffffff', borderRadius: '14px', border: '1px solid #f1f5f9', padding: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ height: '65px', borderRadius: '10px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '6px' }}>
              ☕
            </div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>Kopi Kenangan</div>
            <div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>★ 4.9 • 10-20 min</div>
          </div>
        </div>
      </div>

      {/* Floating Green Bottom Cart Bar */}
      <div 
        style={{ 
          position: 'sticky', 
          bottom: '16px', 
          margin: '24px 16px 16px',
          zIndex: 80,
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}
      >
        <div 
          onClick={() => goToScreen('gofood_2')}
          style={{ 
            flex: 1, 
            background: '#00aa13', 
            borderRadius: '999px', 
            padding: '14px 20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            boxShadow: '0 6px 20px rgba(0, 170, 19, 0.4)',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '14px', fontWeight: 900, color: '#ffffff' }}>
            1 item
          </span>
          <span style={{ fontSize: '15px', fontWeight: 900, color: '#ffffff' }}>
            22.000
          </span>
        </div>

        <div 
          onClick={() => goToScreen('gofood_2')}
          style={{ 
            width: '48px', 
            height: '48px', 
            borderRadius: '50%', 
            background: '#ffffff', 
            border: '2px solid #00aa13', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            cursor: 'pointer'
          }}
        >
          <ShoppingBag size={22} color="#00aa13" />
        </div>
      </div>
    </div>
  );
};

export default GoFood1Page;
