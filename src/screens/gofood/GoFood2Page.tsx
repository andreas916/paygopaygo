import React from 'react';
import { useBudget } from '../../context/BudgetContext';
import { 
  ArrowLeft, 
  Search, 
  Heart, 
  Share2, 
  ChevronRight, 
  Star, 
  Users, 
  Calendar, 
  Percent, 
  Scissors, 
  Minus, 
  Plus, 
  ShoppingBag,
  Info
} from 'lucide-react';

export const GoFood2Page: React.FC = () => {
  const { goToScreen } = useBudget();

  return (
    <div 
      style={{ 
        background: '#f8fafc', 
        minHeight: '100%', 
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', 
        color: '#0f172a', 
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' 
      }}
    >
      {/* Top Food Platter Cover Banner */}
      <div 
        style={{ 
          height: '190px', 
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%), #78350f',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Stylized Food Visual Graphic */}
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '72px', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))' }}>🍗</span>
        </div>

        {/* Floating Top Nav Actions */}
        <div 
          style={{ 
            position: 'absolute', 
            top: '12px', 
            left: '16px', 
            right: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            zIndex: 10
          }}
        >
          {/* Back Button */}
          <button 
            onClick={() => goToScreen('gofood_1')}
            style={{ 
              width: '38px', 
              height: '38px', 
              borderRadius: '50%', 
              background: '#ffffff', 
              border: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            <ArrowLeft size={20} color="#0f172a" />
          </button>

          {/* Right Action Icons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              <Search size={18} color="#0f172a" />
            </div>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              <Heart size={18} color="#0f172a" />
            </div>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              <Share2 size={18} color="#0f172a" />
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info Card (Overlapping Top Banner) */}
      <div style={{ padding: '0 16px', marginTop: '-24px', position: 'relative', zIndex: 10 }}>
        <div 
          style={{ 
            background: '#ffffff', 
            borderRadius: '24px', 
            padding: '16px', 
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
            border: '1px solid #f1f5f9'
          }}
        >
          {/* Restaurant Title & Arrow */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
            <h1 style={{ fontSize: '16px', fontWeight: 900, color: '#0f172a', lineHeight: 1.3, margin: 0 }}>
              Ayam Bakar Madu Lisa
            </h1>
            <ChevronRight size={20} color="#64748b" style={{ flexShrink: 0, marginTop: '2px' }} />
          </div>

          {/* Badges & Delivery Estimate */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
            <span style={{ background: '#00aa13', color: '#ffffff', fontSize: '9px', fontWeight: 900, padding: '1px 6px', borderRadius: '4px' }}>
              PLUS
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '11.5px', fontWeight: 800, color: '#0f172a' }}>
              <Star size={13} color="#ea580c" fill="#ea580c" />
              <span>4.8</span>
              <span style={{ color: '#64748b', fontWeight: 500 }}>(100+)</span>
            </div>
            <span style={{ color: '#cbd5e1' }}>•</span>
            <span style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 600 }}>
              15-25 min (1.14 km)
            </span>
          </div>

          {/* Delivery vs Pickup Toggle Pills */}
          <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: '999px', padding: '3px', marginBottom: '12px' }}>
            <button style={{ flex: 1, background: '#00aa13', color: '#ffffff', border: 'none', borderRadius: '999px', padding: '8px 0', fontSize: '12.5px', fontWeight: 800, cursor: 'pointer' }}>
              Delivery
            </button>
            <button style={{ flex: 1, background: 'transparent', color: '#64748b', border: 'none', borderRadius: '999px', padding: '8px 0', fontSize: '12.5px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', cursor: 'pointer' }}>
              <span>Pickup</span>
              <Info size={13} />
            </button>
          </div>

          {/* Action Pills: Group Order & Jadwalin */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '999px', padding: '6px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, color: '#334155' }}>
              <Users size={14} color="#dc2626" />
              <span>Group Order</span>
              <span style={{ background: '#dc2626', color: '#ffffff', fontSize: '7.5px', fontWeight: 900, padding: '1px 4px', borderRadius: '3px' }}>NEW</span>
            </div>
            <div style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '999px', padding: '6px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, color: '#334155' }}>
              <Calendar size={14} color="#64748b" />
              <span>Jadwalin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Banner Card */}
      <div style={{ padding: '12px 16px 0' }}>
        <div 
          style={{ 
            background: '#ffffff', 
            borderRadius: '16px', 
            padding: '10px 14px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Percent size={15} color="#dc2626" />
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>
              Diskon makanan 50% s.d. 83rb + ek...
            </div>
            <div style={{ fontSize: '10px', color: '#64748b' }}>
              Min. pembelian 151rb
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section ("Menu Murah") */}
      <div style={{ padding: '18px 16px 0' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Scissors size={15} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 900, color: '#0f172a' }}>Menu Murah</div>
            <div style={{ fontSize: '10.5px', color: '#64748b' }}>Menu enak termuraaaah, cuma di sini!</div>
          </div>
        </div>

        {/* Food Item (1 Item in Cart) */}
        <div 
          style={{ 
            background: '#ffffff', 
            borderRadius: '18px', 
            padding: '14px', 
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ maxWidth: '60%' }}>
            <div style={{ fontSize: '8.5px', fontWeight: 900, color: '#dc2626', marginBottom: '2px' }}>
              Menu Murah
            </div>
            <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '4px' }}>
              Ayam Bakar Madu Dada/Paha
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '11px', color: '#64748b', marginBottom: '8px' }}>
              <Star size={12} color="#ea580c" fill="#ea580c" />
              <span style={{ fontWeight: 800, color: '#0f172a' }}>4.9</span>
              <span>(20+)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontSize: '14px', fontWeight: 900, color: '#0f172a' }}>22.000</span>
              <span style={{ fontSize: '10px', color: '#94a3b8', textDecoration: 'line-through' }}>22.500</span>
              <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: '8.5px', fontWeight: 800, padding: '1px 4px', borderRadius: '3px' }}>Promo</span>
            </div>
          </div>

          {/* Right: Food Image & Quantity Stepper */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '85px', height: '70px', borderRadius: '14px', background: 'linear-gradient(135deg, #78350f 0%, #b45309 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '36px' }}>🍗</span>
            </div>

            {/* Stepper with 1 Item Added */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                background: '#ffffff', 
                border: '1.5px solid #00aa13', 
                borderRadius: '999px', 
                padding: '3px 8px' 
              }}
            >
              <Minus size={13} color="#00aa13" style={{ cursor: 'pointer' }} />
              <span style={{ fontSize: '12.5px', fontWeight: 900, color: '#0f172a' }}>1</span>
              <Plus size={13} color="#00aa13" style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to push floating bar down */}
      <div style={{ flex: 1, minHeight: '16px' }} />

      {/* Floating Bottom Cart Bar (Click to proceed to GoFood 3) */}
      <div 
        style={{ 
          position: 'sticky', 
          bottom: '16px', 
          margin: 'auto 16px 16px',
          zIndex: 80,
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}
      >
        <div 
          onClick={() => goToScreen('gofood_3')}
          style={{ 
            flex: 1, 
            background: '#00aa13', 
            borderRadius: '999px', 
            padding: '13px 18px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            boxShadow: '0 6px 20px rgba(0, 170, 19, 0.4)',
            cursor: 'pointer'
          }}
        >
          <div>
            <div style={{ fontSize: '12.5px', fontWeight: 900, color: '#ffffff' }}>1 item</div>
            <div style={{ fontSize: '10.5px', color: '#dcfce7', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '170px' }}>
              Ayam Bakar Madu Lisa
            </div>
          </div>
          <span style={{ fontSize: '15px', fontWeight: 900, color: '#ffffff' }}>22.000</span>
        </div>

        <div 
          onClick={() => goToScreen('gofood_3')}
          style={{ 
            width: '46px', 
            height: '46px', 
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
          <ShoppingBag size={20} color="#00aa13" />
        </div>
      </div>
    </div>
  );
};

export default GoFood2Page;
